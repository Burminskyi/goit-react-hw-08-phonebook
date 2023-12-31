import { useDispatch, useSelector } from 'react-redux';
import { Button, ListGroup } from 'react-bootstrap';

import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import {
  deleteContactThunk,
  fetchContactsThunk,
} from 'redux/contacts/operations';
import { selectAuthentificationStatus } from 'redux/auth/selector';
import {
  selectContacts,
  selectContactsError,
  selectContactsLoading,
  selectFilter,
} from 'redux/contacts/selectors';
import { StyledContactsListGroupItem } from './ContactList.styled';

export const ContactList = () => {
  const isAuthentificated = useSelector(selectAuthentificationStatus);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthentificated) return;
    dispatch(fetchContactsThunk());
  }, [dispatch, isAuthentificated]);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  return (
    <div
      style={{
        width: 'inherit',
      }}
    >
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      {showContacts && (
        <ListGroup>
          {filteredContacts().map(contact => {
            const { id, name, number } = contact;
            return (
              <StyledContactsListGroupItem key={id}>
                <div>
                  <p>
                    <b>Name:</b> {name}
                  </p>
                  <p>
                    <b>Number:</b> {number}
                  </p>
                </div>
                <Button
                  aria-label="Delete"
                  variant="primary"
                  type="button"
                  onClick={() => dispatch(deleteContactThunk(id))}
                >
                  Delete
                </Button>
              </StyledContactsListGroupItem>
            );
          })}
        </ListGroup>
      )}
    </div>
  );
};
