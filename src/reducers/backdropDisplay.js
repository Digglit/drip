const backdropDisplay = (state = false, action) => {
  switch (action.type) {
    case 'DISPLAY_BACKDROP':
      return state = !state
    default:
      return state
  }
}

export default backdropDisplay