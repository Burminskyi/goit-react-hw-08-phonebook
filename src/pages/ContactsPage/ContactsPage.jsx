import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from 'react-bootstrap';

const ContactsPage = () => {
  return (
    <Container style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1>My contacts</h1>
      <ContactForm style={{ margin: 'auto' }} />
      <Filter />
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
