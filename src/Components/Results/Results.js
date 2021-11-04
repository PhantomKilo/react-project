import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Results = (props) => {
  const books = props.book;
  const setSelect = props.setSelectedBook;
  const setImage = props.setImage;
  let bookImage = ''
  const placeHolder = 'https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif'
  const handleSelect = (book) => {
    setSelect(book.volumeInfo);
    if (book.volumeInfo.imageLinks === undefined) {
      setImage({
        thumbnail: placeHolder,
        smallThumbnail: placeHolder
      })
    }else {
      setImage({
        thumbnail: book.volumeInfo.imageLinks.thumbnail,
        smallThumbnail: book.volumeInfo.imageLinks.smallThumbnail,
      })
    }
  
  };

  const bookList = books.map((book) => {
    if (book.volumeInfo.imageLinks === undefined) {
      bookImage = placeHolder
    }else {
      bookImage = book.volumeInfo.imageLinks.thumbnail
    }
    return (
      <Row key={book.etag}>
        <Col>
          <img src={bookImage} />
        </Col>
        <Col>
          <h3>Title: {book.volumeInfo.title}</h3>
          <p key={book.volumeInfo.authors[0]}>
            Author: {book.volumeInfo.authors[0]}
          </p>
          <button onClick={() => handleSelect(book)}>Description</button>
        </Col>
      </Row>
    );
  });

  return <Col>{bookList}</Col>;
};

export default Results;
