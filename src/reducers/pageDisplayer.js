const pageDisplayer = (state = 5, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return state = action.payload
    default:
      return state
  }
}

export default pageDisplayer