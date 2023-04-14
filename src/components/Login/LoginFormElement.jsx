import TextField from 'shared/TextField/TextField';
import Button from 'shared/ButtonForm/ButtonForm';

import useForm from 'shared/Hooks/useForm';

import fields from './fields';
import initialState from './initialState';

// import styles from './login-form.module.css';

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

// // import { useNavigate } from 'react-router-dom';

// import { Button, Form, Input } from 'antd';
// import { LoginFormElement } from 'components/LoginFormElement/LoginFormElement';
// const onFinish = values => {
//   console.log('Success:', values);
// };
// const onFinishFailed = errorInfo => {
//   console.log('Failed:', errorInfo);
// };

// const LoginFormElement = () => (
//   // const navigate = useNavigate();
//   <Form
//     name="basic"
//     labelCol={{
//       span: 8,
//     }}
//     wrapperCol={{
//       span: 16,
//     }}
//     style={{
//       maxWidth: 600,
//     }}
//     initialValues={{
//       remember: true,
//     }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item
//       name={['user', 'email']}
//       label="Email"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your email!',
//           type: 'email',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Password"
//       name="password"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your password!',
//         },
//       ]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <Form.Item
//       name="remember"
//       valuePropName="checked"
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     ></Form.Item>

//     <Form.Item
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Button type="primary" htmlType="submit">
//         Log In
//       </Button>
//     </Form.Item>
//   </Form>
// );
// export default LoginFormElement;
