import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Wishlist = (props) => {
  const wishlist = props.wishlist;
  const setWishlist = props.setWishlist
  const setBook = props.setSelectedBook
  const setImage = props.setBookImage

  const handleRemove = (book) => {
    let newList = wishlist.filter(item => item !== book)
    setWishlist(newList)
  }

  const handleDescription = (book) => {
      setBook(book)
      setImage({
          thumbnail: book.imageLinks.thumbnail,
          smallThumbnail: book.imageLinks.smallThumbnail
      })
  }

  const list = wishlist.map((book) => {
    return (
      <Col sm={6} md={4} lg={3}>
        <Card>
          <img src={book.imageLinks.thumbnail} />
        </Card>
        <Card>
          <Card.Body>
            <h3>{book.title}</h3>
            <h4>{book.authors}</h4>
          </Card.Body>
          <Button onClick={() => handleRemove(book)}>Remove Item</Button>
          <Button onClick={() => handleDescription(book)}>Full Details</Button>
        </Card>
      </Col>
    );
  });

  return <Row>{list}</Row>;
};

export default Wishlist;
