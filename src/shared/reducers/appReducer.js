
const appState = {
  menuToggled: false,
  navFadeToggled: false,
  menuDark: false,
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
    case 'TOGGLE_MENU_DARK':
      return {
        ...state,
        menuDark: !state.menuDark
      };
    case 'UPDATE_CURRENT_SECTION':
      return {
        ...state,
        currentSection: action.payload
      };
    default:
      return state;
  }
}

export default appReducer;