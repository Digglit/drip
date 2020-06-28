

let initialState = {
  modalsOpen: 0,
  modals: {
    itemAvailability: 0,
    confirmAction: 0,
    viewModifiers: 0,
    orderDetails: 0,
    customTransaction: 0,
    customerDetails: 0,
    itemDrawer: 0,
    previousOrders: 0,
  }
}

const modalDisplay = (state = initialState, action) => {
  let newModalsOpen = state.modalsOpen
  let newModals = { ...state.modals }
  switch (action.type) {
    case 'DISPLAY_ITEM_AVAILABILITY':
      if (state.modals.itemAvailability === 0) {
        newModalsOpen += 1
        newModals.itemAvailability = newModalsOpen
      } else {
        newModalsOpen -= 1
        newModals.itemAvailability = 0
      }
      return state = { modalsOpen: newModalsOpen, modals: newModals }

    case 'DISPLAY_CONFIRM_ACTION':
      if (state.modals.confirmAction === 0) {
        newModalsOpen += 1
        newModals.confirmAction = newModalsOpen
      } else {
        newModalsOpen -= 1
        newModals.confirmAction = 0
      }
      return state = { modalsOpen: newModalsOpen, modals: newModals }

    case 'DISPLAY_VIEW_MODIFIERS':
      if (state.modals.viewModifiers === 0) {
        newModalsOpen += 1
        newModals.viewModifiers = newModalsOpen
      } else {
        newModalsOpen -= 1
        newModals.viewModifiers = 0
      }
      return state = { modalsOpen: newModalsOpen, modals: newModals }

    case 'DISPLAY_ORDER_DETAILS':
      if (state.modals.orderDetails === 0) {
        newModalsOpen += 1
        newModals.orderDetails = newModalsOpen
      } else {
        newModalsOpen -= 1
        newModals.orderDetails = 0
      }
      return state = { modalsOpen: newModalsOpen, modals: newModals }

    case 'DISPLAY_CUSTOM_TRANSACTION':
      if (state.modals.customTransaction === 0) {
        newModalsOpen += 1
        newModals.customTransaction = newModalsOpen
      } else {
        newModalsOpen -= 1
        newModals.customTransaction = 0
      }
      return state = { modalsOpen: newModalsOpen, modals: newModals }

    case 'DISPLAY_CUSTOMER_DETAILS':
      if (state.modals.customerDetails === 0) {
        newModalsOpen += 1
        newModals.customerDetails = newModalsOpen
      } else {
        newModalsOpen -= 1
        newModals.customerDetails = 0
      }
      return state = { modalsOpen: newModalsOpen, modals: newModals }

    case 'DISPLAY_ITEM_DRAWER':
      if (state.modals.itemDrawer === 0) {
        newModalsOpen += 1
        newModals.itemDrawer = newModalsOpen
      }
      else {
        newModalsOpen -= 1
        newModals.itemDrawer = 0
      }
      return state = { modalsOpen: newModalsOpen, modals: newModals }

    case 'DISPLAY_PREVIOUS_ORDERS':
      if (state.modals.previousOrders === 0) {
        newModalsOpen += 1
        newModals.previousOrders = newModalsOpen
      }
      else {
        newModalsOpen -= 1
        newModals.previousOrders = 0
      }
      return state = { modalsOpen: newModalsOpen, modals: newModals }

    default:
      return state
  }
}

export default modalDisplay