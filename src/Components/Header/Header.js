import { Link } from "react-router-dom";
import Container  from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
    <Navbar bg='light' expand='md'>
        <Container>
            <Navbar.Brand><Link to='/' />Home</Navbar.Brand>
            
        </Container>
    </Navbar>
}

export default Header
