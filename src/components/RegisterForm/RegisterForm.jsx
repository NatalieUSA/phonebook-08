import TextField from 'shared/TextField/TextField';
import Button from 'shared/ButtonForm/ButtonForm';

import useForm from 'shared/Hooks/useForm';

import fields from './fields';
import initialState from './InitialState';

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

// import initialState from './InitialState';

// import useForm from 'shared/Hooks/useForm';

// import { Button, Form, Input } from 'antd';
// const onFinish = values => {
//   console.log('Success:', values);
// };
// const onFinishFailed = errorInfo => {
//   console.log('Failed:', errorInfo);
// };

// const RegisterForm = ({ onSubmit }) => {
//   const { state, handleChange, handleSubmit } = useForm({
//     initialState,
//     onSubmit,
//   });
//   const { name, email, password } = state;

//   return (
//     <Form
//       onSubmit={handleSubmit}
//       name="basic"
//       labelCol={{
//         span: 8,
//       }}
//       wrapperCol={{
//         span: 16,
//       }}
//       style={{
//         maxWidth: 600,
//       }}
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off"
//     >
//       <Form.Item
//         label="Username"
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your username!',
//           },
//         ]}
//       >
//         <Input value={name} handlechange="handleChange" />
//       </Form.Item>

//       <Form.Item
//         name={['user', 'email']}
//         label="Email"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your email!',
//             type: 'email',
//           },
//         ]}
//       >
//         <Input value={email} handlechange="handleChange" />
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
//         ]}
//       >
//         <Input.Password value={password} handlechange="handleChange" />
//       </Form.Item>

//       <Form.Item
//         name="remember"
//         valuePropName="checked"
//         wrapperCol={{
//           offset: 8,
//           span: 16,
//         }}
//       ></Form.Item>

//       <Form.Item
//         wrapperCol={{
//           offset: 8,
//           span: 16,
//         }}
//       >
//         <Button type="primary" htmlType="submit">
//           Register
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default RegisterForm;

// const onFinish = values => {
//   console.log(values);
// };

// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//     number: '${label} is not a valid number!',
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };
