

let initialState = {
  header: '',
  body: '',
  confirmFunction: null,
  confirmAction: true,
}


const confirmationDetails = (state = initialState, action) => {
  let newState = state
  switch (action.type) {
    case 'DISPLAY_CONFIRM_ACTION':
      if (action.payload !== undefined) {
        newState = { header: action.payload.header, body: action.payload.body, confirmFunction: action.payload.confirmFunction, confirmAction: action.payload.confirmAction }
        return state = newState
      } else {
        return state
      }
    default:
      return state
  }
}

export default confirmationDetails