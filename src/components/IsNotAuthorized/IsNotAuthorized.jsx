import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const IsNotAuthorized = () => {
  return (
    <Nav>
      <Nav.Link>
        <NavLink
          to="/register"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
            };
          }}
        >
          Register
        </NavLink>
      </Nav.Link>
      <Nav.Link>
        <NavLink
          to="/login"
          style={({ isActive }) => {
            return {
              fontWeight: isActive && 'bold',
              // color: isActive && 'DeepSkyBlue',
            };
          }}
        >
          LogIn
        </NavLink>
      </Nav.Link>
    </Nav>
  );
};

export default IsNotAuthorized;
