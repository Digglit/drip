

let initialState = {
  currentPage: 0
}

const pageDisplay = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return state = { currentPage: action.payload }
    default:
      return state
  }
}

export default pageDisplay