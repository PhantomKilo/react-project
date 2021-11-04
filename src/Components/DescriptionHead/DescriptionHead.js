import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const DescriptionHead = (props) => {
  const selected = props.selected;

  return (
    <Col>
      <Card>
        <h1>{selected.title}</h1>
        <h2>By: {selected.authors}</h2>
      </Card>
    </Col>
  );
};

export default DescriptionHead;