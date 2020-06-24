

let initialState = {
  modalsOpen: 0,
  modals: {
    itemAvailability: false,
    driverDetails: false,
    confirmAction: false,
    viewModifiers: false,
  }
}

const modalDisplay = (state = initialState, action) => {
  let newModalsOpen = 0
  let newModals = {}
  if (state.modalsOpen) {
    return state = initialState
  }
  switch (action.type) {
    case 'DISPLAY_ITEM_AVAILABILITY':
      if (!state.modalsOpen) newModalsOpen = 1
      newModals = { ...state.modals }
      newModals.itemAvailability = !newModals.itemAvailability
      return state = { modalsOpen: newModalsOpen, modals: newModals }
    case 'DISPLAY_DRIVER_DETAILS':
      if (!state.modalsOpen) newModalsOpen = 1
      newModals = { ...state.modals }
      newModals.driverDetails = !newModals.driverDetails
      return state = { modalsOpen: newModalsOpen, modals: newModals }
    case 'DISPLAY_CONFIRM_ACTION':
      if (!state.modalsOpen) newModalsOpen = 1
      newModals = { ...state.modals }
      newModals.confirmAction = !newModals.confirmAction
      return state = { modalsOpen: newModalsOpen, modals: newModals }
    case 'DISPLAY_VIEW_MODIFIERS':
      if (!state.modalsOpen) newModalsOpen = 1
      newModals = { ...state.modals }
      newModals.viewModifiers = !newModals.viewModifiers
      return state = { modalsOpen: newModalsOpen, modals: newModals }
    default:
      return state
  }
}

export default modalDisplay