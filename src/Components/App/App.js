import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import SearchBar from "../Search/Search";
import Results from "../Results/Results";
import Header from "../Header/Header";
import ExpandedInfo from "../ExpandedInfo/ExpandedInfo";
import Wishlist from "../Wishlist/Wishlist";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";
import BookInfo from "../BookInfo/BookInfo";
import DescriptionHead from "../DescriptionHead/DescriptionHead";

function App() {
  const [book, setBook] = useState([]);
  const [searchName, setSearchName] = useState("armor");
  const [searchAuthor, setSearchAuthor] = useState("john steakley");
  const [wishlist, setWishlist] = useState([]);
  const [selectedBook, setSelectedBook] = useState("");
  const [bookImage, setBookImage] = useState({
    thumbnail: "",
    smallThumbnail: "",
  });
  const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchName}+inauthor:${searchAuthor}`;
  const apiKey = "AIzaSyD23dM8VmKdIIOpb1gCWFHJeHbiE2qSJRQ";

  const makeApiCall = (url) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBook(data.items);
        setSelectedBook(data.items[0].volumeInfo);
        setBookImage({
          thumbnail: data.items[0].volumeInfo.imageLinks.thumbnail,
          smallThumbnail: data.items[0].volumeInfo.imageLinks.smallThumbnail,
        });
      });
  };

  useEffect(() => {
    const url = searchUrl;
    makeApiCall(url);
  }, []);

  const handleClick = () => {
    makeApiCall(searchUrl);
  };

  return (
    <div className="App">
      <Header />
      <Container className="p-2">
        <Row>
          <Col sm={12} md={6}>
            <Route
              exact
              path="/react-project"
              render={() => (
                <SearchBar
                  setBook={setBook}
                  setSearchName={setSearchName}
                  setSearchAuthor={setSearchAuthor}
                  handleClick={handleClick}
                />
              )}
            />

            <Route
              exact
              path="/react-project"
              render={() => (
                <Results
                  book={book}
                  setSelectedBook={setSelectedBook}
                  setImage={setBookImage}
                />
              )}
            />
          </Col>

          <Col sm={12} md={6}>
            <Route
              exact
              path="/react-project"
              render={() => <DescriptionHead selected={selectedBook} />}
            />

            <Route
              exact
              path="/react-project"
              render={() => (
                <BookInfo
                  selected={selectedBook}
                  image={bookImage}
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                />
              )}
            />
          </Col>
          <Route
            exact
            path="/react-project/bookInfo"
            render={() => (
              <ExpandedInfo selected={selectedBook} image={bookImage} />
            )}
          />
          <Route
            exact
            path="/react-project/wishlist"
            render={() => (
              <Wishlist
                wishlist={wishlist}
                setWishlist={setWishlist}
                setSelectedBook={setSelectedBook}
                setBookImage={setBookImage}
              />
            )}
          />
        </Row>
      </Container>
    </div>
  );
}

export default App;
