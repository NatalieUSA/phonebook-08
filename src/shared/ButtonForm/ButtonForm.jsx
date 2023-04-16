import { ButtonForm } from './ButtonForm.styled';

const Button = ({ children, type = 'submit' }) => {
  return <ButtonForm type={type}>{children}</ButtonForm>;
};

export default Button;
