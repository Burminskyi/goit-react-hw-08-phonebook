import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { logoutThunk } from 'redux/operations';
import { selectUserData } from 'redux/selectors';

const IsAuthorized = () => {
  const { email } = useSelector(selectUserData);
  const dispatch = useDispatch();

  const handleClick = e => {
    console.log('click: ');
    dispatch(logoutThunk());
  };

  return (
    <>
      <p>{email}</p>
      <Button
        onClick={handleClick}
        variant="primary"
        type="button"
        style={{ marginLeft: '20px', }}
      >
        Log Out
      </Button>
    </>
  );
};

export default IsAuthorized;
