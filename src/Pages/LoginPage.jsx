import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedIn } from 'redux/auth/AuthSelectors';

import { login } from 'redux/auth/AuthOperations';

import LoginFormElement from 'components/Login/LoginFormElement';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className="container">
      <h1 className="page-title">Login page</h1>
      <LoginFormElement onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;

// import LoginFormElement from 'components/Login/LoginFormElement';
// import { useNavigate } from 'react-router-dom';

// const LogInPage = () => {
//   //   const navigate = useNavigate();
//   return <LoginFormElement />;
// };
// export default LogInPage;
