export const isLoggedIn = ({ auth }) => auth.isLogin;
export const getUser = ({ auth }) => auth.user;
export const getToken = ({ auth }) => auth.token;
export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
