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
    payload: {zIndex, values}
  }
}