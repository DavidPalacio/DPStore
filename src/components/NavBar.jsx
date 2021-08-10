//import Navbar from 'react-bootstrap/Navbar';
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
//import CardWidget from "CardWidget";      <CardWidget/>       

function NavBar() {
    return (
        //<div>Bienvenidos</div>
        <Navbar bg="light" expand="lg">
        <Container>

            <Navbar.Brand href="#home">Tiendita de Marleny</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Dentre</Nav.Link>
                <NavDropdown title="Vitrina" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Mercado</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Dulces</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">No Fiamos</NavDropdown.Item>
                </NavDropdown>
            </Nav>

            </Navbar.Collapse>
        </Container>
        </Navbar>
        
    );
}
export default NavBar;