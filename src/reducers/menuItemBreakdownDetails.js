


let initialState = {
  open: false,
  zIndex: 0,
  breakdownData: {
    weekly: {}
  }
}


const menuItemBreakdownDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_MENU_ITEM_BREAKDOWN':
      if (action.payload.values === null) {
        return state = { open: !state.open, zIndex: action.payload.zIndex, breakdownData: state.breakdownData }
      } else {
        return state = { open: !state.open, zIndex: action.payload.zIndex, breakdownData: action.payload.values }
      }
    default:
      return state
  }
}


export default menuItemBreakdownDetails