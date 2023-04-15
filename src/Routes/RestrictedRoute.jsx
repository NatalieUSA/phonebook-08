import { Navigate } from 'react-router-dom';
import { useAuth } from 'shared/Hooks';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;

// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { isLoggedIn } from 'redux/auth/AuthSelectors';
// //import { isLoggedIn } from 'redux/auth/AuthSelectors';

// const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const isLogin = useSelector(isLoggedIn);

//   return isLogin ? <Navigate to={redirectTo} /> : Component;
// };

// export default RestrictedRoute;

// import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// //import { isLoggedIn } from 'redux/auth/AuthSelectors';

// const PublicRoute = () => {
//   const token = useSelector(({ auth }) => auth.token);
//   return token ? <Navigate to="/contacts" /> : <Outlet />;
//   // const isLogin = useSelector(isLoggedIn);
//   // console.log(isLogin);

//   // if (!isLogin) {
//   //   return <Navigate to="/login" />;
//   // }
//   // return <Outlet />;
// };

// export default PublicRoute;
