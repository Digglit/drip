


let initialState = {
  modalsOpen: 0,
  modals: {
    manageCoupons: false,
    viewPreviousOrders: false,
    addNewDriver: false,
    confirmActionModule: false,
    itemModifiers: false,
    driverDetails: false,
    editModifiers: false,
    couponDetails: false,
    composeEmail: false,
    emailDetails: false,
    menuItemBreakdown: false,
    customerDetails: false,
    customTransaction: false,
    hoursOfOperation: false,
    manageSpecials: false,
    specialDetails: false
  }
}

const modalDisplay = (state = initialState, action) => {
  let newState = { ...state }
  switch (action.type) {

    case 'MANAGE_COUPONS':
      newState.modals.manageCoupons = !newState.modals.manageCoupons
      if (newState.modals.manageCoupons) newState.modalsOpen += 1
      else newState.modalsOpen -= 1
      return state = newState

    case 'VIEW_PREVIOUS_ORDERS':
      newState.modals.viewPreviousOrders = !state.modals.viewPreviousOrders
      if (state.modals.viewPreviousOrders) newState.modalsOpen -= 1
      else newState.modalsOpen += 1
      return state = newState

    case 'ADD_NEW_DRIVER':
      newState.modals.addNewDriver = !state.modals.addNewDriver
      if (state.modals.addNewDriver) newState.modalsOpen -= 1
      else newState.modalsOpen += 1
      return state = newState

    case 'CONFIRM_ACTION_MODULE':
      newState.modals.confirmActionModule = !state.modals.confirmActionModule
      if (state.modals.confirmActionModule) newState.modalsOpen -= 1
      else newState.modalsOpen += 1
      return state = newState

    case 'ITEM_MODIFIERS':
      newState.modals.itemModifiers = !state.modals.itemModifiers
      if (state.modals.itemModifiers) newState.modalsOpen -= 1
      else newState.modalsOpen += 1
      return state = newState

    case 'DRIVER_DETAILS':
      newState.modals.driverDetails = !state.modals.driverDetails
      if (state.modals.driverDetails) newState.modalsOpen -= 1
      else newState.modalsOpen += 1
      return state = newState

    case 'EDIT_MODIFIERS':
      newState.modals.editModifiers = !state.modals.editModifiers
      if (state.modals.editModifiers) newState.modalsOpen -= 1
      else newState.modalsOpen += 1
      return state = newState

    case 'COUPON_DETAILS':
      newState.modals.couponDetails = !state.modals.couponDetails
      if (state.modals.couponDetails) newState.modalsOpen -= 1
      else newState.modalsOpen += 1
      return state = newState

    case 'COMPOSE_EMAIL':
      newState.modals.composeEmail = !state.modals.composeEmail
      if (state.modals.composeEmail) newState.modalsOpen -= 1
      else newState.modalsOpen += 1
      return state = newState

    case 'EMAIL_DETAILS':
      newState.modals.emailDetails = !state.modals.emailDetails
      if (state.modals.emailDetails) newState.modalsOpen -= 1
      else newState.modalsOpen += 1
      return state = newState

    case 'MENU_ITEM_BREAKDOWN':
      newState.modals.menuItemBreakdown = !state.modals.menuItemBreakdown
      if (state.modals.menuItemBreakdown) newState.modalsOpen -= 1
      else newState.modalsOpen += 1
      return state = newState

    case 'CUSTOMER_DETAILS':
      newState.modals.customerDetails = !state.modals.customerDetails
      if (state.modals.customerDetails) newState.modalsOpen -= 1
      else newState.modalsOpen += 1
      return state = newState

    case 'CUSTOM_TRANSACTION':
      newState.modals.customTransaction = !state.modals.customTransaction
      if (state.modals.customTransaction) newState.modalsOpen -= 1
      else newState.modalsOpen += 1
      return state = newState

    case 'HOURS_OF_OPERATION':
      newState.modals.hoursOfOperation = !state.modals.hoursOfOperation
      if (state.modals.hoursOfOperation) newState.modalsOpen -= 1
      else newState.modalsOpen += 1
      return state = newState

    case 'MANAGE_SPECIALS':
      newState.modals.manageSpecials = !state.modals.manageSpecials
      if (state.modals.manageSpecials) newState.modalsOpen -= 1
      else newState.modalsOpen += 1
      return state = newState

    case 'SPECIAL_DETAILS':
      newState.modals.specialDetails = !state.modals.specialDetails
      if (state.modals.specialDetails) newState.modalsOpen -= 1
      else newState.modalsOpen += 1
      return state = newState

    default:
      return state
  }
}

export default modalDisplay