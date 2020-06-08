


const displayAddNewDriver = (state = { open: false, zIndex: 0 }, action) => {
  switch (action.type) {
    case 'DISPLAY_ADD_DRIVER':
      return state = { open: !state.open, zIndex: action.payload }
    default:
      return state
  }
}

export default displayAddNewDriver