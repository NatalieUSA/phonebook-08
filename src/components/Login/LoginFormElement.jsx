import TextField from 'shared/TextField/TextField';
import Button from 'shared/ButtonForm/ButtonForm';

import useForm from 'shared/Hooks/useForm';

import fields from './fields';
import initialState from './initialState';

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
