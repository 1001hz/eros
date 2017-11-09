export const ApiRoutes = {
  login: {
    method: 'POST',
    path: '/login'
  },
  logout: {
    method: 'GET',
    path: '/logout'
  },
  tokenLogin: {
    method: 'POST',
    path: '/login/token'
  },
  signUp: {
    method: 'POST',
    path: '/signup'
  },
  resetPasswordLink: {
    method: 'POST',
    path: '/reset-password-link'
  },
  resetPassword: {
    method: 'POST',
    path: '/reset-password'
  },
  getWeddings: {
    method: 'GET',
    path: '/weddings'
  }
};
