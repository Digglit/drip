


let initialState = {
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
    case 'DISPLAY_CUSTOMER_DETAILS':
      if (action.payload !== undefined) {
        return state = { customerData: action.payload }
      } else {
        return state
      }
    default:
      return state
  }
}

export default customerDetails