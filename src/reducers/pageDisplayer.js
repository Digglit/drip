const pageDisplayer = (state = 6, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return state = action.payload
    default:
      return state
  }
}

export default pageDisplayer