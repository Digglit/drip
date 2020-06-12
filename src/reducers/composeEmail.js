


let initialState = {
  open: false,
  zIndex: 0,
}

const composeEmail = (state = initialState, action) => {
  switch (action.type) {
    case 'COMPOSE_NEW_EMAIL':
      return state = { open: !state.open, zIndex: action.payload.zIndex }
    default:
      return state
  }
}

export default composeEmail