
let initialState = {
  open: false,
  zIndex: 10,
  specialName: '',
  minPrice: 0,
  minQuantity: 0,
  amountRedeemed: 0,
  startDate: '',
  endDate: '',
  appliesToItems: []
}

const specialDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_SPECIAL':
      let newCouponState = {
        open: !state.open,
        zIndex: action.payload,
        specialName: 'New Special',
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

export default specialDetails