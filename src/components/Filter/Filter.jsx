import styles from './Filter.module.css';
import { InputGroup, Form } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';

const filterId = nanoid();

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.filterWrap}>
      <label htmlFor={filterId} className={styles.filterLabel}>
        Find contacts by name
      </label>
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path
              d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
              stroke="currentColor"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search"
          aria-label="Username"
          name="filter"
          value={filter}
          id={filterId}
          onChange={({ target }) => {
            dispatch(setFilter(target.value));
          }}
        />
      </InputGroup>
      {/* <input
        className={styles.filterInput}
        type="text"
        name="filter"
        value={filter}
        id={filterId}
        onChange={({ target }) => {
          dispatch(setFilter(target.value));
        }}
      /> */}
    </div>
  );
};
