import { Link } from "react-router-dom";
import Container  from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
    return(
        <Navbar bg='light' expand='md'>
        <Container>
            <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Link className="nav-link" to="/bookInfo">Expanded info</Link>
            <Link className="nav-link" to="/wishlist">Wishlist</Link>
        </Nav>
      </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Header
