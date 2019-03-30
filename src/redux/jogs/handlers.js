const initialState = {
  isLoading: false,
  error: '',
  list: [],
};

export const getJogsRequest = state => ({
  ...state,
  isLoading: true,
});

export const getJogsSuccess = (state, { payload }) => ({
  ...state,
  isLoading: false,
  list: payload,
});

export const getJogsFailure = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: payload,
});

export default initialState;
