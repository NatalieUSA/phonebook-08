import PropTypes from 'prop-types';
import useForm from 'shared/Hooks/useForm';
import TextField from 'shared/TextField/TextField';
import initialState from './InitialState';

import Button from 'shared/ButtonForm/ButtonForm';
import fields from './fields';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField value={name} handleChange={handleChange} {...fields.name} />
        <TextField
          value={email}
          handleChange={handleChange}
          {...fields.email}
        />
        <TextField
          value={password}
          handleChange={handleChange}
          {...fields.password}
        />
        <Button>Register</Button>
      </form>
    </>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
