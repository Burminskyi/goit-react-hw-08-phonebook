import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { logoutThunk } from 'redux/auth/operations';
import { selectUserData } from 'redux/auth/selector';

const IsAuthorized = () => {
  const data = useSelector(selectUserData);
  const dispatch = useDispatch();

  const handleClick = e => {
    console.log('click: ');
    dispatch(logoutThunk());
  };

  return (
    <>
      {data ? <p>{data.email}</p> : <p>Your email</p>}
      <Button
        onClick={handleClick}
        variant="primary"
        type="button"
        style={{ marginLeft: '20px' }}
      >
        Log Out
      </Button>
    </>
  );
};

export default IsAuthorized;
