export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;

export const selectUser = ({ auth }) => auth.user;

export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;

// export const isLoggedIn = ({ auth }) => auth.isLogin;
// export const getUser = ({ auth }) => auth.user;
// export const getToken = ({ auth }) => auth.token;
// export const getAuth = ({ auth }) => {
//   const { isLogin, token } = auth;
//   return { isLogin, token };
// };
// export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;
