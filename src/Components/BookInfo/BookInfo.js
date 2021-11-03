import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const BookInfo = (props) => {
  const book = props.selected;
  const image = props.image;

  return (
    <Col sm={12} md={6}>
      <Card>
        <h1>{book.title}</h1>
        <Card.Img src={image.thumbnail} />
        <p>{book.description}</p>
      </Card>
    </Col>
  );
};

export default BookInfo;
