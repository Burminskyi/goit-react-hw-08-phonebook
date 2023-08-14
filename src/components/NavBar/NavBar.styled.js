import { NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNavbarBrand = styled(NavbarBrand)`
  font-size: 32px;
  margin-right: 60px;
`;

export const StyledLogo = styled(NavLink)`
  text-decoration: none;
`;