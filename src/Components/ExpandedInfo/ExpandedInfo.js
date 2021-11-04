import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ExpandedInfo = (props) => {
  const book = props.selected;
  const image = props.image;

  return (
    <Card>
      <Row>
        <Col sm={12} md={6}>
          <h1>{book.title}</h1>
          <h2>{book.authors}</h2>
        </Col>
        <Col sm={12} md={6}>
          <Card.Img src={image.thumbnail} />
        </Col>
      </Row>
      <Row>
          {book.description}
      </Row>
    </Card>
  );
};

export default ExpandedInfo;
