import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// const { GoogleSpreadsheet } = require("google-spreadsheet");
// const creds = require('././secret.json')

import SearchBar from "../Search/Search";
import Results from "../Results/Results";
import Header from "../Header/Header";
import ExpandedInfo from "../ExpandedInfo/ExpandedInfo";
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
  const [selectedBook, setSelectedBook] = useState('');
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
      });
  };

  useEffect(() => {
    const url = searchUrl;
    makeApiCall(url);
  }, []);

  const handleClick = () => {
    makeApiCall(searchUrl);
    console.log(selectedBook)
  };

  return (
    <div className="App">
      <Header />
      <Container className='p-2'>
        <Row>
          <Col sm={12} md={6}>
            <Route
              exact
              path="/"
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
              path="/"
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
              path="/"
              render={() => <DescriptionHead selected={selectedBook} />}
            />

            <Route
              exact
              path="/"
              render={() => (
                <BookInfo selected={selectedBook} image={bookImage} />
              )}
            />
          </Col>
          <Route
            exact
            path='/bookInfo'
            render={() => (
              <ExpandedInfo 
                selected={selectedBook}
                image={bookImage}
              />
            )}
          />
        </Row>
      </Container>
    </div>
  );
}

export default App;
