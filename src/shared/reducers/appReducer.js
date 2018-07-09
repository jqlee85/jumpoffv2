
const appState = {
  menuToggled: false,
  navFadeToggled: false,
  navFront: false,
  currentSection: 1
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
    case 'TOGGLE_NAV_FRONT':
      return {
        ...state,
        navFront: !state.navFront
      };
    default:
      return state;
  }
}

export default appReducer;