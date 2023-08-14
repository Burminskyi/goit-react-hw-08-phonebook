import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from './header-logo.svg';

import IsAuthorized from 'components/IsAuthorized/IsAuthorized';
import IsNotAuthorized from 'components/IsNotAuthorized/IsNotAuthorized';
import { selectAuthentificationStatus } from 'redux/auth/selector';
import { StyledNavbarBrand } from './NavBar.styled';

const NavBar = () => {
  const isAuthentificated = useSelector(selectAuthentificationStatus);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      <StyledNavbarBrand style={{ fontSize: '32px', marginRight: '60px' }}>
          <img
            alt=""
            src={logo}
            width="48"
            height="48"
            className="d-inline-block align-top"
            style={{ fontSize: '32px'}}
          />{' '}
          PhoneBook
        </StyledNavbarBrand>
        {/* <StyledNavbarBrand>PhoneBook</StyledNavbarBrand> */}
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
