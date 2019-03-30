const initialState = {
  isLoading: false,
  error: '',
  isOpen: true,
  list: [],
};

export const toggleModal = state => ({
  ...state,
  isOpen: !state.isOpen,
});

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

export const addJogRequest = state => ({
  ...state,
  isLoading: true,
});

export const addJogSuccess = state => ({
  ...state,
  isLoading: false,
});

export const addJogFailure = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: payload,
});

export default initialState;
