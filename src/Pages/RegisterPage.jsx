import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { register } from 'redux/auth/AuthOperations';
import { isLoggedIn } from 'redux/auth/AuthSelectors';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const isLogin = useSelector(isLoggedIn);
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(register(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <RegisterForm onSubmit={handleSignup} />;
};
export default RegisterPage;
