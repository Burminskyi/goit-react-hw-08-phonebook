import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import {
  StyledContactForm,
  StyledContactsPageContainer,
} from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <StyledContactsPageContainer>
      <h1>My contacts</h1>
      <StyledContactForm />
      <Filter />
      <ContactList />
    </StyledContactsPageContainer>
  );
};

export default ContactsPage;
