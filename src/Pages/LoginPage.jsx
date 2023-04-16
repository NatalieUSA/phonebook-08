import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/AuthOperations';
import LoginFormElement from 'components/Login/LoginFormElement';

import { Wrapper } from 'shared/Wrapper/Wrapper';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    console.log(data);
    dispatch(login(data));
  };

  return (
    <Wrapper>
      <LoginFormElement onSubmit={handleLogin} />
    </Wrapper>
  );
};

export default LoginPage;
