

let initialState = {
  open: false,
  zIndex: 0,
  mode: 'edit',
  buttonFunction: null,
  modifiers: [{ name: 'Ranch', description: 'Sauce: Ranch' },
  { name: 'Honey Mustard', description: 'Sauce: Honey Mustard' },
  { name: 'BBQ', description: 'Sauce: BBQ' },
  { name: 'Mild', description: 'Sauce: Mild' },
  { name: 'Hot', description: 'Sauce: Hot' }]
}

const editModifiers = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_EDIT_MODIFIERS':
      let updatedState = {
        open: !state.open,
        zIndex: action.payload.values,
        modifiers: state.modifiers,
        mode: action.payload.mode === undefined ? state.mode : action.payload.mode,
        buttonFunction: action.payload.buttonFunction === undefined ? state.buttonFunction : action.payload.buttonFunction
      }
      return state = updatedState
    case 'ADD_NEW_MODIFIER':
      let newModifiers = state.modifiers
      let newItem = { name: action.payload.name, description: action.payload.description }
      newModifiers.push(newItem)
      let newState = state
      newState.modifiers = newModifiers
      return state = newState
    default:
      return state
  }
}

export default editModifiers