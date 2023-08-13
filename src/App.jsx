import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SharedLayout } from 'components/SharedLayout/SharedLayout.jsx';
import {
  selectAuthentificationStatus,
  selectRefreshingStatus,
  selectToken,
} from 'redux/auth/selector';
import { refreshUserThunk } from 'redux/auth/operations';
import { RestrictedRoute } from 'RestrictedRoute';
import { PrivateRoute } from 'PrivateRoute';
import { Loader } from 'components/Loader/Loader';

const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage.jsx'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage.jsx'));
const HomePage = lazy(() => import('pages/HomePage/HomePage.jsx'));

export const App = () => {
  const isRefreshing = useSelector(selectRefreshingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  if (isRefreshing) return <Loader />;
  return (
    <>
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
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
