import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import {
  selectAuthentificationStatus,
  selectContacts,
  selectContactsError,
  selectContactsLoading,
  selectFilter,
} from 'redux/selectors';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { deleteContactThunk, fetchContactsThunk } from 'redux/contactsThunk';

export const ContactList = () => {
  const isLoggedIn = useSelector(selectAuthentificationStatus);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(fetchContactsThunk());
  }, [dispatch, isLoggedIn]);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      {showContacts && (
        <ul className={styles.contactList}>
          {filteredContacts().map(contact => {
            const { id, name, number } = contact;
            return (
              <li className={styles.contactListItem} key={id}>
                <div>
                  <p>
                    <b>Name:</b> {name}
                  </p>
                  <p>
                    <b>Number:</b> {number}
                  </p>
                </div>
                <button
                  aria-label="Delete"
                  type="button"
                  className={styles.contactListBtn}
                  onClick={() => dispatch(deleteContactThunk(id))}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
