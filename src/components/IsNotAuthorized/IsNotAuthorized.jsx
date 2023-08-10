import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const IsNotAuthorized = () => {
  return (
    <Nav>
      <Nav.Link>
        <NavLink to="/register">Register</NavLink>
      </Nav.Link>
      <Nav.Link>
        <NavLink to="/login">LogIn</NavLink>
      </Nav.Link>
    </Nav>
  );
};

export default IsNotAuthorized;
