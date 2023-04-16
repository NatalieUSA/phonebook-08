export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;

export const selectUser = ({ auth }) => auth.user;

export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;
