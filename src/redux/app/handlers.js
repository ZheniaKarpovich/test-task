const initialState = {
  isLoading: false,
  isMobile: window.innerWidth < 420,
  menuIsOpen: false,
};

export const useMobileVersion = state => ({
  ...state,
  isMobile: !state.isMobile,
});

export const toggleMenu = state => ({
  ...state,
  menuIsOpen: !state.menuIsOpen,
});

export default initialState;
