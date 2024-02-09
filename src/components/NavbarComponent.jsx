import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>

      <Navbar.Brand href="#home">
            <img
              src="computer-icons-weather-wind-rain-windy-weather-icon-11553394233bil1pfsjcf.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Brand href="#home" className='fw-bold'>EPI-Meteo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Meteo</Nav.Link>
            <Nav.Link href="#link">Info</Nav.Link>
            <NavDropdown title="Cities" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Milan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Palermo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Parma</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Altamura
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Rome
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Napoli
              </NavDropdown.Item><NavDropdown.Item href="#action/3.4">
                Bologna
              </NavDropdown.Item><NavDropdown.Item href="#action/3.4">
                Torino
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;