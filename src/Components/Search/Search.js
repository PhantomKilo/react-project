import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SearchBar = (props) => {
  const handleNameChange = (event) => {
    props.setSearchName(event.target.value);
  };

  const handleAuthorChange = (event) => {
    props.setSearchAuthor(event.target.value);
  };

  return (
    <>
      <Card>
        <Col sm={12} md={4}>
          <input
            type="text"
            onChange={handleNameChange}
            placeholder="Book Title"
          />
        </Col>
        <Col sm={12} md={4}>
          <input
            type="text"
            onChange={handleAuthorChange}
            placeholder="Book Author"
          />
        </Col>
        <Col sm={12} md={4}>
          <Button variant="primary" onClick={props.handleClick}>
            Click
          </Button>
        </Col>
      </Card>
    </>
  );
};

export default SearchBar;

//<Col>
//   <Card>
//   <input type="text" onChange={handleNameChange} placeholder="Book Title" />
//   <input
//     type="text"
//     onChange={handleAuthorChange}
//     placeholder="Book Author"
//   />
//   <Button variant="primary" onClick={props.handleClick}>
//     Click
//   </Button>
//   </Card>
// </Col>
