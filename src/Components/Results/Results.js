import Col from "react-bootstrap/Col";

const Results = (props) => {
  const books = props.book;
  const setSelect = props.setSelectedBook;
  const setImage = props.setImage
  const handleSelect = (book) => {
    setSelect(book.volumeInfo);
    setImage({
      thumbnail: book.volumeInfo.imageLinks.thumbnail,
      smallThumbnail: book.volumeInfo.imageLinks.smallThumbnail
    })
  };

  const bookList = books.map((book) => {
    return (
      <div key={book.etag}>
        <h3>Title: {book.volumeInfo.title}</h3>
        <p key={book.volumeInfo.authors[0]}>
          Author: {book.volumeInfo.authors[0]}
        </p>
        <button onClick={() => handleSelect(book)}>Test</button>
      </div>
    );
  });


  return (
    <Col sm={12} md={6}>
      {bookList}
    </Col>
  );
};

export default Results;
