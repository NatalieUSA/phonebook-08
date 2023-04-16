import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/AuthOperations';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Wrapper } from 'shared/Wrapper/Wrapper';
const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleRegister = data => {
    dispatch(register(data));
  };

  return (
    <Wrapper>
      <RegisterForm onSubmit={handleRegister} />
    </Wrapper>
  );
};
export default RegisterPage;
