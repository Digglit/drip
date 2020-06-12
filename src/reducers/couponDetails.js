
let initialState = {
  open: false,
  zIndex: 10,
  couponName: '',
  minPrice: 0,
  minQuantity: 0,
  amountRedeemed: 0,
  startDate: '',
  endDate: '',
  appliesToItems: []
}

const couponDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_COUPON':
      let newCouponState = {
        open: !state.open,
        zIndex: action.payload,
        couponName: 'New Coupon',
        minPrice: 0,
        minQuantity: 0,
        amountRedeemed: 0,
        startDate: '',
        endDate: '',
        appliesToItems: []
      }
      return state = newCouponState
    default:
      return state
  }
}

export default couponDetails