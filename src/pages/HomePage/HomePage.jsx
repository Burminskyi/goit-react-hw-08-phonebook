import { Container } from 'react-bootstrap';
import {
  StyledHomeHeader,
  StyledHomeHeaders,
  StyledHomeList,
  StyledHomeNavigation,
  StyledHomeNavigationItem,
  StyledHomeNavigationItemUnactive,
  StyledHomeOrderedList,
  StyledHomeParagraph,
  StyledHomeText,
} from './HomePage.styled';
import { useSelector } from 'react-redux';
import { selectAuthentificationStatus } from 'redux/auth/selector';

const HomePage = () => {
  const isAuthentificated = useSelector(selectAuthentificationStatus);
  return (
    <Container>
      <StyledHomeHeader>Welcome to PhoneBookApp!</StyledHomeHeader>
      <StyledHomeText>
        <StyledHomeParagraph>
          Create Your Personalized Contact Book
        </StyledHomeParagraph>
        <p>
          Discover the ultimate tool for managing your contacts effectively.
          With our user-friendly application, you can easily organize and access
          all your contacts in one place. Whether it's for personal or
          professional use, PhoneBookApp simplifies contact management.
        </p>
      </StyledHomeText>
      <StyledHomeHeaders>Key Features:</StyledHomeHeaders>
      <StyledHomeList>
        <li>
          <p>
            <strong>Effortless Contact Management: </strong>Create your own
            digital contact book effortlessly. No more sifting through scattered
            information – keep everything organized and accessible.
          </p>
        </li>
        <li>
          <p>
            <strong>User-Friendly Interface: </strong>Our intuitive interface
            ensures a seamless experience, making it easy to add, edit, and
            delete contacts.
          </p>
        </li>
        <li>
          <p>
            <strong>Quick Search: </strong>Looking for a specific contact? Our
            search feature allows you to find contacts instantly by name.
          </p>
        </li>
        <li>
          <p>
            <strong>Secure and Private: </strong>Your data is your own. We
            prioritize your privacy and data security, ensuring your information
            remains confidential.
          </p>
        </li>
      </StyledHomeList>

      <StyledHomeHeaders>Getting Started: </StyledHomeHeaders>
      <StyledHomeOrderedList>
        <li>
          <p>
            <strong>Sign Up or Log In: </strong>If you're new here, create an
            account to get started. For returning users, simply log in to access
            your existing account.
          </p>
        </li>
        <li>
          <p>
            <strong>Add Contacts: </strong>Create new contacts by entering their
            name and phone number. Never lose track of important connections
            again.
          </p>
        </li>
        <li>
          <p>
            <strong>Organize with Ease: </strong>Edit, delete, or update contact
            details at any time. Our platform gives you the flexibility to
            manage your contacts as your relationships evolve.
          </p>
        </li>

        <li>
          <p>
            <strong>Effortless Deletion: </strong>Remove contacts you no longer
            need with just a click. Say goodbye to outdated information
            cluttering your contact list.
          </p>
        </li>
        <li>
          <p>
            <strong>Stay Connected: </strong>Keep your contacts up to date and
            maintain seamless communication with everyone important to you.
          </p>
        </li>
      </StyledHomeOrderedList>
      <p>
        Are you ready to take control of your contacts? Join PhoneBookApp
        today and experience the convenience of managing your contacts
        hassle-free. Start building your personalized contact book now!
      </p>
      <StyledHomeNavigation >
        {isAuthentificated ? <StyledHomeNavigationItemUnactive to="/register">
          Sign Up Now
        </StyledHomeNavigationItemUnactive> : <StyledHomeNavigationItem to="/register">
          Sign Up Now
        </StyledHomeNavigationItem>}
        {' '}|{' '}
        {isAuthentificated ? <StyledHomeNavigationItemUnactive to="/login">
        Log In
        </StyledHomeNavigationItemUnactive> : <StyledHomeNavigationItem to="/login">
        Log In
        </StyledHomeNavigationItem>}
      </StyledHomeNavigation>
      <StyledHomeParagraph>
        Got questions? Check out our FAQ section or reach out to our support
        team for assistance.
      </StyledHomeParagraph>
      <p>Stay connected, stay organized with PhoneBookApp!</p>
    </Container>
  );
};

export default HomePage;
