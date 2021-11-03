
const SearchBar = (props) => {
  const handleNameChange = (event) => {
    props.setSearchName(event.target.value);
  };

  const handleAuthorChange = (event) => {
    props.setSearchAuthor(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleNameChange} placeholder="Book Title" />
      <input
        type="text"
        onChange={handleAuthorChange}
        placeholder="Book Author"
      />
      <button variant="primary" onClick={props.handleClick}>
        Click
      </button>
    </div>
  );
};

export default SearchBar;
