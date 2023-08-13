import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificationStatus } from 'redux/auth/selector';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogedIn = useSelector(selectAuthentificationStatus);
  return !isLogedIn ? <Navigate to={redirectTo} /> : <Component />;
};
