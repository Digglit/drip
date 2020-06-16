
let initialState = {
  open: false,
  zIndex: 0
}

const specialManager = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_MANAGE_SPECIALS':
      return state = { open: !state.open, zIndex: action.payload }
    default:
      return state
  }
}

export default specialManager