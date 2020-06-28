


const modifyOrder = (state = false, action) => {
  switch (action.type) {
    case 'MODIFY_ORDER':
      return state = !state
    default:
      return state
  }
}

export default modifyOrder