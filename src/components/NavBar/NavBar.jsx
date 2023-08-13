import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import IsAuthorized from 'components/IsAuthorized/IsAuthorized';
import IsNotAuthorized from 'components/IsNotAuthorized/IsNotAuthorized';
import { selectAuthentificationStatus } from 'redux/auth/selector';

const NavBar = () => {
  const isAuthentificated = useSelector(selectAuthentificationStatus);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand style={{ fontSize: '32px', marginRight: '60px' }}>
          PhoneBook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                  };
                }}
              >
                Home
              </NavLink>
            </Nav.Link>
            {isAuthentificated && (
              <Nav.Link>
                <NavLink
                  to="/contacts"
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? 'bold' : '',
                    };
                  }}
                >
                  My contacts
                </NavLink>
              </Nav.Link>
            )}
          </Nav>
          {isAuthentificated ? <IsAuthorized /> : <IsNotAuthorized />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;