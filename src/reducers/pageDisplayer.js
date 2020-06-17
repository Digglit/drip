const pageDisplayer = (state = 7, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return state = action.payload
    default:
      return state
  }
}

export default pageDisplayer