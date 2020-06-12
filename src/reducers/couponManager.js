
let initialState = {
  open: false,
  zIndex: 0
}

const couponManager = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_MANAGE_COUPONS':
      return state = { open: !state.open, zIndex: action.payload }
    default:
      return state
  }
}

export default couponManager