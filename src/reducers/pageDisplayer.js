const pageDisplayer = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return state = action.payload
    default:
      return state
  }
}

export default pageDisplayer