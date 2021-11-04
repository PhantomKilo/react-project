import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const BookInfo = (props) => {
  const book = props.selected;
  const image = props.image;

  return (
    <Col>
      <Card>
        <Card.Img src={image.thumbnail} />
        <p>{book.description}</p>
        <Button>Add to wishlist</Button>
      </Card>
    </Col>
  );
};

export default BookInfo