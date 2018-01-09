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
    path: '/user'
  },
  userUpdate: {
    method: 'PATCH',
    path: '/user'
  },
  resetPasswordLink: {
    method: 'POST',
    path: '/password/forgot'
  },
  resetPassword: {
    method: 'POST',
    path: '/password/reset'
  },
  getWeddings: {
    method: 'GET',
    path: '/weddings'
  },
  getWedding: {
    method: 'GET',
    path: '/wedding/{weddingId}'
  },
  addWedding: {
    method: 'POST',
    path: '/weddings'
  },
  updateWedding: {
    method: 'PATCH',
    path: '/weddings'
  },
  removeWedding: {
    method: 'DELETE',
    path: '/weddings'
  },
  getGuests: {
    method: 'GET',
    path: '/weddings/{weddingId}/guests'
  },
  validateInvitationCode: {
    method: 'GET',
    path: '/weddings/{weddingId}/invitation/{invitationId}'
  }
};
