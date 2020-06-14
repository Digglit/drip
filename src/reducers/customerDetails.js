


let initialState = {
  open: false,
  zIndex: 0,
}

const customerDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_CUSTOMER_DETAILS':
      return state = { open: !state.open, zIndex: action.payload.zIndex }
    default:
      return state
  }
}

export default customerDetails