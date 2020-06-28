

export const changePage = (newPage) => {
  return {
    type: 'CHANGE_PAGE',
    payload: newPage
  }
}

export const displayItemAvailability = () => {
  return {
    type: 'DISPLAY_ITEM_AVAILABILITY'
  }
}

export const displayConfirmAction = (values) => {
  return {
    type: 'DISPLAY_CONFIRM_ACTION',
    payload: values
  }
}

export const displayViewModifiers = () => {
  return {
    type: 'DISPLAY_VIEW_MODIFIERS',
  }
}

export const createOrderHandler = () => {
  return {
    type: 'CREATE_ORDER'
  }
}

export const checkoutHandler = () => {
  return {
    type: 'DISPLAY_CHECKOUT'
  }
}

export const displayOrderDetails = () => {
  return {
    type: 'DISPLAY_ORDER_DETAILS'
  }
}

export const displayCustomTransaction = () => {
  return {
    type: 'DISPLAY_CUSTOM_TRANSACTION'
  }
}

export const displayCustomerDetails = (values) => {
  return {
    type: 'DISPLAY_CUSTOMER_DETAILS',
    payload: values
  }
}

export const modifyOrderHandler = () => {
  return {
    type: 'MODIFY_ORDER'
  }
}

export const displayItemDrawer = () => {
  return {
    type: 'DISPLAY_ITEM_DRAWER'
  }
}

export const displayPreviousOrders = () => {
  return {
    type: 'DISPLAY_PREVIOUS_ORDERS'
  }
}

export const closeModalHandler = (modalName) => {
  switch (modalName) {
    case 'itemAvailability':
      return { type: 'DISPLAY_ITEM_AVAILABILITY' }
    case 'confirmAction':
      return { type: 'DISPLAY_CONFIRM_ACTION' }
    case 'viewModifiers':
      return { type: 'DISPLAY_VIEW_MODIFIERS' }
    case 'orderDetails':
      return { type: 'DISPLAY_ORDER_DETAILS' }
    case 'customTransaction':
      return { type: 'DISPLAY_CUSTOM_TRANSACTION' }
    case 'customerDetails':
      return { type: 'DISPLAY_CUSTOMER_DETAILS' }
    case 'itemDrawer':
      return { type: 'DISPLAY_ITEM_DRAWER' }
    case 'previousOrders':
      return { type: 'DISPLAY_PREVIOUS_ORDERS' }
    default:
      return null
  }
}