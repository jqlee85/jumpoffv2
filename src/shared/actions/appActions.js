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

export function toggleNavFront(){
  return { 
    type: 'TOGGLE_NAV_FRONT'
  }
}

export function updateCurrentSection(currentSection){
  return { 
    type: 'UPDATE_CURRENT_SECTION',
    payload: currentSection
  }
}