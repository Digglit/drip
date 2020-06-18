


let initialState = {
  open: false,
  zIndex: 20,
  customerData: {
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    totalSpending: 0,
    averageOrderPrice: 0,
    ordersPlaced: 0,
    itemsOrdered: 0,
    latestOrder: '',
    preferredOrderMethod: '',
    orders: [
      {
        date: '',
        orderNumber: 0,
        orderTotal: 0,
        tip: 0,
        time: '',
        orderQuantity: 0,
        orderType: '',
        driver: '',
        address: '',
        orderItems: [
          {
            quantity: 0,
            name: '',
            section: '',
            description: ''
          }
        ]
      }
    ]
  }
}

const customerDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_CUSTOMER_DETAILS':
      return state = { open: !state.open, zIndex: action.payload.zIndex, customerData: action.payload.values }
    case 'CLOSE_CUSTOMER_DETAILS':
      let newState = { ...state }
      newState.open = !state.open
      return state = newState
    default:
      return state
  }
}

export default customerDetails