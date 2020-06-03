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

export const openMenuItemDrawer = (drawerContents) => {
  return {
    type: 'OPEN_MENU_ITEM_DRAWER',
    payload: drawerContents
  }
}