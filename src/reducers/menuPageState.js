

const menuPageState = (state = false, value) => {
  switch (value.type) {
    case 'MODIFY_MENU':
      return state = false
    case 'PLACE_ORDER':
      return state = true
    default:
      return state
  }
}

export default menuPageState