import { Button, Container, Form } from 'react-bootstrap';
import { styled } from 'styled-components';

export const StyledAuthContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledAuthHeader = styled.p`
  margin: 0 !important;
  margin-bottom: 30px !important;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
`;

export const StyledAuthForm = styled(Form)`
  width: 300px;
  margin-top: 15px;
`;

export const StyledAuthBtn = styled(Button)`
  width: 150px;
  margin: auto;
  display: block;
`;
