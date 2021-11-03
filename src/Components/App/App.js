import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// const { GoogleSpreadsheet } = require("google-spreadsheet");
// const creds = require('././secret.json')

import SearchBar from "../Search/Search";
import Results from "../Results/Results";
import Header from "../Header/Header";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import BookInfo from "../BookInfo/BookInfo";

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
      <Container>
        <Row>
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
        </Row>
        <Row>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Results
                  book={book}
                  setSelectedBook={setSelectedBook}
                  setImage={setBookImage}
                />
                <BookInfo selected={selectedBook} image={bookImage} />
              </>
            )}
          />
        </Row>
      </Container>
    </div>
  );
}

export default App;
