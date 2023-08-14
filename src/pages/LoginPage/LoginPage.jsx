import { StyledFormLabel } from 'components/ContactForm/ContactForm.styled';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/operations';
import {
  StyledAuthBtn,
  StyledAuthContainer,
  StyledAuthForm,
  StyledAuthHeader,
} from './LoginPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      loginThunk({
        email,
        password,
      })
    );
  };

  return (
    <StyledAuthContainer>
      <StyledAuthHeader>
        LogIn to view your contacts
        <br />
        or register if you don't have an account
      </StyledAuthHeader>
      <b>Enter your email and password</b>
      <StyledAuthForm onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <StyledFormLabel>Email</StyledFormLabel>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <StyledFormLabel>Password</StyledFormLabel>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </Form.Group>
        <StyledAuthBtn variant="primary" type="submit">
          Sign In
        </StyledAuthBtn>
      </StyledAuthForm>
    </StyledAuthContainer>
  );
};

export default LoginPage;
