import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log(state);
    const persistedToken = state.auth.token;
    console.log(persistedToken);

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    setAuthHeader(persistedToken);
    try {
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// import { createAsyncThunk } from '@reduxjs/toolkit';

// import * as api from '../../shared/servises/auth-api';

// export const register = createAsyncThunk(
//   'auth/register',
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await api.registerApi(data);
//       console.log(result);
//       return result;
//     } catch ({ response }) {
//       return rejectWithValue(response);
//     }
//   }
// );

// export const login = createAsyncThunk(
//   'auth/login',
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await api.loginApi(data);
//       return result;
//     } catch ({ response }) {
//       return rejectWithValue(response);
//     }
//   }
// );
// // export const current = createAsyncThunk(
// //   'auth/refresh',
// //   async (_, { rejectWithValue, getState }) => {
// //     //  if (persistedToken === null) {
// //     //    // If there is no token, exit without performing any request
// //     //    return thunkAPI.rejectWithValue('Unable to fetch user');
// //     //  }
// //     try {
// //       const { auth } = getState();
// //       console.log(auth);
// //       const data = await api.currentApi(auth.token);
// //       console.log(data);
// //       return data;
// //     } catch ({ response }) {
// //       return rejectWithValue(response);
// //     }
// //   },
// //   {
// //     condition: (_, { rejectWithValue, getState }) => {
// //       const { auth } = getState();
// //       if (auth.token === 0) {
// //         return rejectWithValue('Unable to fetch user');
// //       }
// //     },
// //   }
// // );
// export const current = createAsyncThunk(
//   'auth/current',
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const { auth } = getState();
//       console.log(auth);
//       const data = await api.currentApi(auth.token);
//       console.log(data);
//       return data;
//     } catch ({ response }) {
//       return rejectWithValue(response);
//     }
//   },
//   {
//     condition: (_, { getState }) => {
//       const { auth } = getState();
//       if (!auth.token) {
//         return false;
//       }
//     },
//   }
// );

// export const logout = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await api.logOutApi();
//       console.log(data);
//       return data;
//     } catch ({ response }) {
//       return rejectWithValue(response);
//     }
//   }
// );
