import PropTypes from 'prop-types';
import useForm from 'shared/Hooks/useForm';
import initialState from './initialState';

import TextField from 'shared/TextField/TextField';
import Button from 'shared/ButtonForm/ButtonForm';
import fields from './fields';

const LoginFormElement = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};

export default LoginFormElement;

LoginFormElement.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
