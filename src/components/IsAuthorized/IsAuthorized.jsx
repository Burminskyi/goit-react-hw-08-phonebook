import { useDispatch, useSelector } from 'react-redux';

import { logoutThunk } from 'redux/auth/operations';
import { selectUserData } from 'redux/auth/selector';
import { StyledAuthorizedEmail, StyledLogoutBtn } from './IsAuthorized.styled';

const IsAuthorized = () => {
  const data = useSelector(selectUserData);
  const dispatch = useDispatch();

  const handleClick = e => {
    console.log('click: ');
    dispatch(logoutThunk());
  };

  return (
    <>
      {data ? <StyledAuthorizedEmail>{data.email}</StyledAuthorizedEmail> : <StyledAuthorizedEmail>Your email</StyledAuthorizedEmail>}
      <StyledLogoutBtn
        onClick={handleClick}
        variant="primary"
        type="button"
      >
        Log Out
      </StyledLogoutBtn>
    </>
  );
};

export default IsAuthorized;
