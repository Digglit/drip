

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

export const displayDriverDetails = (zIndex, values) => {
  return {
    type: 'DISPLAY_DRIVER_DETAILS',
    payload: { zIndex, values }
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