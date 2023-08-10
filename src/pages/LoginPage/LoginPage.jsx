import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/operations';


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
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <strong
        style={{
          fontSize: '36px',
          marginTop: '30px',
          marginBottom: '30px',
          textAlign: 'center',
        }}
      >
        LogIn to view your contacts
        <br />
        or register if you don't have an account
      </strong>
      <b>Enter your email and password</b>
      <Form
        onSubmit={handleSubmit}
        style={{
          width: '300px',
          // margin: 'auto',
          marginTop: '15px',
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Create password"
            required
            minLength={7}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ width: '150px', margin: 'auto', display: 'block' }}
        >
          Sign In
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
