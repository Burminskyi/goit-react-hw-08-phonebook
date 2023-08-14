import { StyledFormLabel } from 'components/ContactForm/ContactForm.styled';
import {
  StyledAuthBtn,
  StyledAuthContainer,
  StyledAuthForm,
  StyledAuthHeader,
} from 'pages/LoginPage/LoginPage.styled';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      registerThunk({
        name,
        email,
        password,
      })
    );
  };

  return (
    <StyledAuthContainer>
      <StyledAuthHeader>
        Register to view contacts
        <br />
        or LogIn if you already have an account
      </StyledAuthHeader>
      <b>Enter your name, email and password</b>
      <StyledAuthForm onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <StyledFormLabel>Name</StyledFormLabel>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter your name"
            minLength={2}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <StyledFormLabel>Email</StyledFormLabel>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <StyledFormLabel>Password</StyledFormLabel>
          <Form.Control
            name="password"
            type="password"
            placeholder="Create password"
            required
            minLength={7}
          />
        </Form.Group>
        <StyledAuthBtn variant="primary" type="submit">
          Sign Up
        </StyledAuthBtn>
      </StyledAuthForm>
    </StyledAuthContainer>
  );
};

export default RegisterPage;
