

const checkoutDisplay = (state = false, action) => {
  switch (action.type) {
    case 'DISPLAY_CHECKOUT':
      return state = !state
    default:
      return state
  }
}

export default checkoutDisplay