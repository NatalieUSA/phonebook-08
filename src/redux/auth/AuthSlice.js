import { createSlice } from '@reduxjs/toolkit';
import { register, login, refreshUser, logout } from './AuthOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'register',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export default authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { register, login, current, logout } from './AuthOperations';

// const initialState = {
//   user: {},
//   token: '',
//   isLogin: false,
//   isRefreshing: false,
//   loading: false,
//   error: null,
// };

// // const initialState = {
// //   user: { name: null, email: null },
// //   token: null,
// //   isLoggedIn: false,
// //   isRefreshing: false,
// // };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addCase(register.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(register.fulfilled, (state, { payload }) => {
//         const { user, token } = payload;
//         state.loading = false;
//         state.user = user;
//         state.token = token;
//         state.isLogin = true;
//       })
//       .addCase(register.rejected, (state, { payload }) => {
//         state.loading = false;
//         state.error = payload;
//       })
//       .addCase(login.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, { payload }) => {
//         const { user, token } = payload;
//         state.loading = false;
//         state.user = user;
//         state.token = token;
//         state.isLogin = true;
//       })
//       .addCase(login.rejected, (state, { payload }) => {
//         state.loading = false;
//         state.error = payload;
//       })
//       .addCase(current.pending, state => {
//         state.loading = true;
//         state.error = null;
//         state.isRefreshing = true;
//       })
//       .addCase(current.fulfilled, (state, { payload }) => {
//         const { user, token } = payload;
//         state.loading = false;
//         state.user = user;
//         state.token = token;
//         state.isLogin = true;
//         state.isRefreshing = false;
//       })
//       .addCase(current.rejected, (state, { payload }) => {
//         state.loading = false;
//         state.error = payload;
//         state.isRefreshing = false;
//       })
//       .addCase(logout.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(logout.fulfilled, state => {
//         state.loading = false;
//         state.user = {};
//         state.token = '';
//         state.isLogin = false;
//       })
//       .addCase(logout.rejected, (state, { payload }) => {
//         state.loading = false;
//         state.error = payload;
//       });
//   },
// });

// export default authSlice.reducer;
