import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// const { GoogleSpreadsheet } = require("google-spreadsheet");
// const creds = require('././secret.json')

import SearchBar from "../Search/Search";
import Results from "../Results/Results";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import BookInfo from "../BookInfo/BookInfo";

function App() {
  const [book, setBook] = useState([]);
  const [searchName, setSearchName] = useState("armor");
  const [searchAuthor, setSearchAuthor] = useState("steakley");
  const [wishlist, setWishlist] = useState([]);
  const [selectedBook, setSelectedBook] = useState({})
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
    console.log(book);
  };

  console.log(book);

  return (
    <div className="App">
   <SearchBar
            setBook={setBook}
            setSearchName={setSearchName}
            setSearchAuthor={setSearchAuthor}
            handleClick={handleClick}
          />
      <Container>
        <Row>
        <Results book={book} setSelectedBook={setSelectedBook} />
        <BookInfo selectedBook={selectedBook}/>
        </Row>
        <Row>
          <BookInfo selected={selectedBook}/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
