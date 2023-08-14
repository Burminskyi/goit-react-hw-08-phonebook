import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from 'react-bootstrap';
import { styled } from 'styled-components';

export const StyledContactsPageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledContactForm = styled(ContactForm)`
  margin: auto;
`;
