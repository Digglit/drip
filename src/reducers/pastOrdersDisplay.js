
const pastOrdersDisplay = (state = false, action) => {
  switch(action.type) {
    case 'PAST_ORDERS_DISPLAY':
      return state = !this.state
    default:
      return state
  }
}

export default pastOrdersDisplay