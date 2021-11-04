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
    <Col>
      <Card>
        <input
          type="text"
          onChange={handleNameChange}
          placeholder="Book Title"
        />

        <input
          type="text"
          onChange={handleAuthorChange}
          placeholder="Book Author"
        />

        <Button variant="primary" onClick={props.handleClick}>
          Search Google book Api
        </Button>
        
      </Card>
    </Col>
  );
};

export default SearchBar;
