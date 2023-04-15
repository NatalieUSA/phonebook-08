// import { Wrapper } from 'shared/Wrapper/Wrapper';

// const {
//   default: LoginFormElement,
// } = require('components/Login/LoginFormElement');

// const LoginPage = () => {
//   return (
//     <Wrapper>
//       <LoginFormElement />
//     </Wrapper>
//   );
// };

// export default LoginPage;

import { useDispatch } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { isLoggedIn } from 'redux/auth/AuthSelectors';

import { login } from 'redux/auth/AuthOperations';

import LoginFormElement from 'components/Login/LoginFormElement';
// import styles from './container.module.css';
import { Wrapper } from 'shared/Wrapper/Wrapper';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    console.log(data);
    dispatch(login(data));
  };

  return (
    <Wrapper>
      {/* <h2 className="page-title">Enter Your login and password</h2> */}
      <LoginFormElement onSubmit={handleLogin} />
    </Wrapper>
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
