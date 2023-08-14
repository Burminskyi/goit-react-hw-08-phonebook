import { Button } from 'react-bootstrap';
import { styled } from 'styled-components';

export const StyledLogoutBtn = styled(Button)`
  margin-left: 20px;
  @media (max-width: 991px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const StyledAuthorizedEmail = styled.p`
  @media (max-width: 991px) {
    margin-top: 10px;
  }
`;
