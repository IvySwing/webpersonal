import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <Navbar expand="sm">
      <Container>
        <LinkContainer to="/"><Navbar.Brand>Kori B. Riddick</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About Me</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/work">
              <Nav.Link>Work</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/playground">
              <Nav.Link>Playground</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/connect">
              <Nav.Link>Connect</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
