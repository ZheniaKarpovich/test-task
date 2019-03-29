const initialState = {
  isLoading: false,
  error: '',
  user: {},
};

export const authenticateRequest = state => ({
  ...state,
  isLoading: true,
});

export const authenticateSuccess = (state, { payload }) => ({
  ...state,
  isLoading: false,
  user: payload,
});

export const authenticateFailure = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: payload,
});

export default initialState;
