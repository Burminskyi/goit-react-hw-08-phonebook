import { Form, Button } from 'react-bootstrap';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContactThunk } from 'redux/contacts/operations';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') {
      setName(value);
      return;
    }
    if (name === 'number') {
      setNumber(value);
      return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isInContacts = contacts.some(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );

    if (isInContacts) {
      alert('This contact is already exist');
      return;
    }

    dispatch(addContactThunk({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form
    className="mb-4"
      onSubmit={handleSubmit}
      style={{
        width: '300px',
        marginTop: '15px',
      }}
    >
      <Form.Group className="mb-2">
        <Form.Label>Contact name</Form.Label>
        <Form.Control
          name="name"
          value={name}
          type="text"
          placeholder="Enter contact name"
          required
          onChange={handleChange}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          name="number"
          value={number}
          type="tel"
          placeholder="Enter contact phone"
          required
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        style={{
          display: 'block',
          margin: 'auto',
          width: '300px',
        }}
      >
        Create contact
      </Button>
    </Form>
  );
};
