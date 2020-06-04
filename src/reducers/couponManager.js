const couponManager = (state = { open: true }, action) => {
  switch (action.type) {
    case 'VIEW_MANAGE_COUPONS':
      return state = { open: !state.open }
    default:
      return state
  }
}

export default couponManager