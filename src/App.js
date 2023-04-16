// import NavBar from 'components/NavBar/NavBar';
// import UserRoutes from 'Routes/UserRoutes';
// import { GlobalStyle } from 'components/GlobalStyle';

// import styles from './app.module.css';
import { Route, Routes } from 'react-router-dom';
import { LayoutPages } from 'Pages/LayoutPages';
import HomePage from 'Pages/HomePage';
import RegisterPage from 'Pages/RegisterPage';
import LoginPage from 'Pages/LoginPage';
import ContactsPage from 'Pages/ContactsPage';

import RestrictedRoute from 'Routes/RestrictedRoute';
import PrivateRoute from 'Routes/PrivateRoute';
import { refreshUser } from 'redux/auth/AuthOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from 'shared/Hooks';
import { Loader } from 'shared/Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    // <b>Refreshing user...</b>
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<LayoutPages />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
export default App;
