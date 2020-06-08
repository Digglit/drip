

let initialState = {
  open: false,
  header: '',
  body: '',
  zIndex: 0,
  confirmFunction: null,
  confirmAction: false
}

const confirmFunctionDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_CONFIRMATION':
      return state = action.payload
    case 'CLOSE_CONFIRMATION':
      let updatedStateReset = {
        open: false,
        header: state.header,
        body: state.body,
        zIndex: state.zIndex,
        confirmFunction: null,
        confirmAction: state.confirmAction
      }
      return state = updatedStateReset
    default:
      return state
  }
}

export default confirmFunctionDetails