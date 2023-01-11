import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Components/styles/nav.css'
import logo from './images/SwapiLogo.png'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='brand' href="/">
          <img src={logo} alt="SwapiSearcher"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link  href="/planets">Planets</Nav.Link>
            <Nav.Link  href="/people">People</Nav.Link>
            <Nav.Link  href="/species">Species</Nav.Link>
            <Nav.Link  href="/starships">Starships</Nav.Link>
            <Nav.Link  href="/vehicles">Vehicles</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;








