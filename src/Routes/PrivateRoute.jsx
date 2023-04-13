import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken, getAuth } from 'redux/auth/AuthSelectors';

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <p>...Loading не логин</p>;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;

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
