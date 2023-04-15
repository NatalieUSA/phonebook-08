// import instance from './auth-api';
import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  console.log(data);
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  console.log(id);
  return data;
};

// export const contactInstance = axios.create({
//   baseURL: 'https://642b4c71208dfe2547160104.mockapi.io/contacts',
// });

// export const getContacts = async () => {
//   const { data } = await contactInstance.get('/');
//   return data;
// };

// export const addContact = async data => {
//   const { data: result } = await contactInstance.post('/', data);
//   return result;
// };

// export const deleteContact = async id => {
//   const { data } = await contactInstance.delete(`/${id}`);
//   console.log(id);
//   return data;
// };
