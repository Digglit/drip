
let initialState = {
  open: false,
  zIndex: 0,
  modifierName: '',
  allowMultipleSelected: false,
  maxSelectionAmount: 1,
  options: []
}

const itemModifiers = (state = initialState, action) => {
  switch(action.type) {
    case 'DISPLAY_ITEM_MODIFIERS':
      let updatedState
      if (action.payload.zIndex === 0) {
        updatedState = {
          open: !state.open,
          zIndex: 0,
          modifierName: state.modifierName,
          allowMultipleSelected: state.allowMultipleSelected,
          maxSelectionAmount: state.maxSelectionAmount,
          options: state.options
        }
      } else {
        updatedState = {
          open: !state.open,
          zIndex: action.payload.zIndex,
          modifierName: action.payload.values.modifierName,
          allowMultipleSelected: action.payload.values.allowMultipleSelected,
          maxSelectionAmount: action.payload.values.maxSelectionAmount,
          options: action.payload.values.options
        }
      }
      return updatedState
    default:
      return state
  }
}

export default itemModifiers