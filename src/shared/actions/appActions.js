export function toggleNav(){
  return { 
    type: 'TOGGLE_NAV'
  }
}

export function toggleNavFade(){
  return { 
    type: 'TOGGLE_NAV_FADE'
  }
}

export function toggleMenuDark(){
  return { 
    type: 'TOGGLE_MENU_DARK'
  }
}

export function updateCurrentSection(currentSection){
  return { 
    type: 'UPDATE_CURRENT_SECTION',
    payload: currentSection
  }
}