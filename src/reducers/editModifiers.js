

let initialState = {
  open: false,
  zIndex: 0,
  modifiers: ['Ranch', 'Honey Mustard', 'BBQ', 'Mild', 'Hot']
}

const editModifiers = (state = initialState, action) => {
  switch(action.type) {
    case 'DISPLAY_EDIT_MODIFIERS':
      return state = {open: !state.open, zIndex: action.payload, modifiers: state.modifiers}
    default:
      return state
  }
}

export default editModifiers