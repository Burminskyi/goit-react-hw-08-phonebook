import { Button, Form, FormLabel } from 'react-bootstrap';
import { styled } from 'styled-components';

export const StyledContactsForm = styled(Form)`
  width: 300px;
  margin-top: 15px;
`;

export const StyledContactsFormBtn = styled(Button)`
  display: block;
  margin: auto;
  width: 300px;
`;

export const StyledFormLabel = styled(FormLabel)`
  font-weight: 500;
  color: #0d6efd;
  margin-bottom: 5px;
`;
