

let initialState = {
  open: false,
  zIndex: 0
}

const customTransaction = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_CUSTOM_TRANSACTION':
      return state = { open: !state.open, zIndex: action.payload }
    default:
      return state
  }
}

export default customTransaction