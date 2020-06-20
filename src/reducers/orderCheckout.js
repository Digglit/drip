

let initialState = {
  open: false,
  zIndex: 0
}

const orderCheckout = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_CHECKOUT':
      return state = { open: !state.open, zIndex: action.payload }
    default:
      return state
  }
}

export default orderCheckout