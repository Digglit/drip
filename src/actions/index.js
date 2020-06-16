export const changePage = (number) => {
  return {
    type: 'CHANGE_PAGE',
    payload: number
  }
}

export const displayBackdrop = () => {
  return {
    type: 'DISPLAY_BACKDROP'
  }
}

export const openMenuItemDrawer = () => {
  return {
    type: 'OPEN_MENU_ITEM_DRAWER'
  }
}

export const openMenuItemDrawerWithDetails = (drawerContents) => {
  return {
    type: 'OPEN_MENU_ITEM_DRAWER_WITH_DETAILS',
    payload: drawerContents
  }
}

export const displayConfirmationPrompt = (confirmationDetails) => {
  return {
    type: 'DISPLAY_CONFIRMATION',
    payload: confirmationDetails
  }
}

export const closeConfirmationPrompt = () => {
  return {
    type: 'CLOSE_CONFIRMATION',
  }
}

export const manageCouponsHandler = (values) => {
  return {
    type: 'VIEW_MANAGE_COUPONS',
    payload: values
  }
}

export const displayCouponDetailsHandler = (values) => {
  return {
    type: 'ADD_NEW_COUPON',
    payload: values
  }
}

export const manageSpecialsHandler = (values) => {
  return {
    type: 'VIEW_MANAGE_SPECIALS',
    payload: values
  }
}

export const displaySpecialDetailsHandler = (values) => {
  return {
    type: 'ADD_NEW_SPECIAL',
    payload: values
  }
}

export const viewPreviousOrdersHandler = (values) => {
  return {
    type: 'VIEW_PREVIOUS_ORDERS',
    payload: values
  }
}

export const displayAddDriverHandler = (values) => {
  return {
    type: 'DISPLAY_ADD_DRIVER',
    payload: values
  }
}

export const displayItemModifiersHandler = (zIndex, values) => {
  return {
    type: 'DISPLAY_ITEM_MODIFIERS',
    payload: { zIndex, values }
  }
}

export const displayDriverDetailsHandler = (zIndex, values) => {
  return {
    type: 'DISPLAY_DRIVER_DETAILS',
    payload: { zIndex, values }
  }
}

export const displayEditModifiersHandler = (values, mode, buttonFunction) => {
  return {
    type: 'DISPLAY_EDIT_MODIFIERS',
    payload: { values, mode, buttonFunction }
  }
}

export const addNewModifierHandler = (values) => {
  return {
    type: 'ADD_NEW_MODIFIER',
    payload: values
  }
}

export const composeEmailHandler = (zIndex, values) => {
  return {
    type: 'COMPOSE_NEW_EMAIL',
    payload: { zIndex, values }
  }
}

export const viewEmailDetailsHandler = (zIndex, values) => {
  return {
    type: 'VIEW_EMAIL_DETAILS',
    payload: { zIndex, values }
  }
}

export const displayMenuItemBreakdownHandler = (zIndex, values) => {
  return {
    type: 'DISPLAY_MENU_ITEM_BREAKDOWN',
    payload: { zIndex, values }
  }
}

export const viewCustomerDetailsHandler = (zIndex, values) => {
  return {
    type: 'VIEW_CUSTOMER_DETAILS',
    payload: { zIndex, values }
  }
}

export const closeCustomerDetailsHandler = () => {
  return {
    type: 'CLOSE_CUSTOMER_DETAILS',
  }
}

export const displayCustomTransactionHandler = (zIndex) => {
  return {
    type: 'DISPLAY_CUSTOM_TRANSACTION',
    payload: zIndex
  }
}

export const displayHoursOfOperationHandler = (zIndex) => {
  return {
    type: 'DISPLAY_HOURS_OF_OPERATION',
    payload: zIndex
  }
}