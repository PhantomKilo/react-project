import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [book, setBook] = useState({});
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
    const url = `https://www.googleapis.com/books/v1/volumes?q=armor+inauthor:john+steakley`
    makeApiCall(url)
  }, [])

  const handleClick = () => {
    console.log(book)
    
  }

  return(
  <div className="App">
    <button onClick={handleClick}>test click</button>
  </div>
  )
}

export default App;
