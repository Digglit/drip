const menuDrawerOpenStatus = (state = { open: false }, action) => {
  switch (action.type) {
    case 'OPEN_MENU_ITEM_DRAWER':
      return state = { open: !state.open }
    default:
      return state
  }
}

export default menuDrawerOpenStatus