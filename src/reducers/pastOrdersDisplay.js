let initialState = {
  open: false,
  zIndex: 0
}

const pastOrdersDisplay = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_PREVIOUS_ORDERS':
      return state = { open: !state.open, zIndex: action.payload }
    default:
      return state
  }
}

export default pastOrdersDisplay