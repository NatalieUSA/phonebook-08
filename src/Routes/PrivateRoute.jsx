import { Navigate } from 'react-router-dom';
import { useAuth } from 'shared/Hooks';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;

// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getAuth } from 'redux/auth/AuthSelectors';

// const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLogin, token } = useSelector(getAuth);
//   const shouldRedirect = !isLogin && !token;
//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// };

// export default PrivateRoute;
// import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getAuth } from 'redux/auth/AuthSelectors';

// const PrivateRoute = () => {
//   //   const isLogin = useSelector(isLoggedIn);
//   //   if (!isLogin) {
//   //     return <Navigate to="/login" />;
//   //   }
//   //   return <Outlet />;
//   const { isLogin, token } = useSelector(getAuth);

//   if (!isLogin && token) {
//     return <p>...Loading не логин</p>;
//   }

//   if (!isLogin && !token) {
//     return <Navigate to="/login" />;
//   }

//   return <Outlet />;
// };

// export default PrivateRoute;

// const PrivateRoute = () => {
//   const token = useSelector(getToken);
//   return token ? <Outlet /> : <Navigate to="/login" />;
//   //   const isLogin = useSelector(isLoggedIn);

//   //   if (isLogin) {
//   //     return <Navigate to="/contacts" />;
//   //   }
//   //   return <Outlet />;
// };

// export default PrivateRoute;
