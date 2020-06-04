

let initialState = {
  open: false,
  header: '',
  body: '',
  zIndex: 0,
  confirmFunction: null,
}

const confirmFunctionDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_CONFIRMATION':
      return state = action.payload
    case 'CLOSE_CONFIRMATION':
      return state = initialState
    default:
      return state
  }
}

export default confirmFunctionDetails