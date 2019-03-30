const initialState = {
  isLoading: false,
  isAuthenticated: false,
  error: '',
  user: {},
};

export const isAuthenticated = state => ({
  ...state,
  isAuthenticated: !!localStorage.getItem('access_token'),
});

export const authenticateRequest = state => ({
  ...state,
  isLoading: true,
});

export const authenticateSuccess = state => ({
  ...state,
  isLoading: false,
  isAuthenticated: true,
});

export const authenticateFailure = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: payload,
});

export const getUserRequest = state => ({
  ...state,
  isLoading: true,
});

export const getUserSuccess = (state, { payload }) => ({
  ...state,
  isLoading: false,
  user: payload,
});

export const getUserFailure = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: payload,
});

export default initialState;
