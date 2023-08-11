import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'react-bootstrap';

const ContactsPage = () => {
  return (
    <Container>
      <h1>My contacts</h1>
      <ContactForm style={{ margin: 'auto' }} />
      <Filter />
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
