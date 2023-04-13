import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const registerApi = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  setToken(result.token);
  console.log(result);
  return result;
};

export const loginApi = async data => {
  const { data: result } = await instance.post('/users/login', data);
  setToken(result.token);
  console.log(result);
  return result;
};

export const currentApi = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/users/current');
    console.log(data);
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

// export const currentApi = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       setToken(persistedToken);
//       // setAuthHeader(persistedToken);
//       const res = await axios.get('/users/current');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const logOutApi = async () => {
  const { data } = await instance.post('/users/logout');
  setToken();
  return data;
};

export default instance;
