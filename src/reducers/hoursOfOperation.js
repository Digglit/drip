

let initialState = {
  open: false,
  zIndex: 0,
}

const hoursOfOperation = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_HOURS_OF_OPERATION':
      return state = { open: !state.open, zIndex: action.payload }
    default:
      return state
  }
}

export default hoursOfOperation