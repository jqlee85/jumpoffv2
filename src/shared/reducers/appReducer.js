
const appState = {
  menuToggled: false,
  navFadeToggled: false
}

// Reducer
const appReducer = (state = appState, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return { 
        ...state,
        menuToggled: !state.menuToggled
      };
    case 'TOGGLE_NAV_FADE':
      return {
        ...state,
        navFadeToggled: !state.navFadeToggled
      };
    default:
      return state;
  }
}

export default appReducer;