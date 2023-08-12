import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SharedLayout } from 'components/SharedLayout/SharedLayout.jsx';
import { selectAuthentificationStatus, selectToken } from 'redux/selectors';
import { refreshUserThunk } from 'redux/operations';
import { RestrictedRoute } from 'RestrictedRoute';
import { PrivateRoute } from 'PrivateRoute';

const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage.jsx'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage.jsx'));
const HomePage = lazy(() => import('pages/HomePage/HomePage.jsx'));

export const App = () => {
  const isLoggedIn = useSelector(selectAuthentificationStatus);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token || isLoggedIn) return;
    console.log('token: ', token);

    dispatch(refreshUserThunk());
  }, [token, dispatch, isLoggedIn]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};