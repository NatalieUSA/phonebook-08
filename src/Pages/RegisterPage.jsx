import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/AuthOperations';

import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleRegister = data => {
    dispatch(register(data));
  };

  return <RegisterForm onSubmit={handleRegister} />;
};
export default RegisterPage;
