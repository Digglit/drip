

let initialState = {
  open: false,
  zIndex: 0,
  date: '',
  time: '',
  subject: '',
  body: ''
}

const emailDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_EMAIL_DETAILS':
      if (action.payload.zIndex !== 0) {
        let updatedState = {
          open: !state.open,
          zIndex: action.payload.zIndex,
          name: action.payload.values.name,
          date: '',
          time: action.payload.values.time,
          subject: '',
          body: '',
        }
        return state = updatedState
      } else {
        let updatedState = {
          open: !state.open,
          zIndex: action.payload.zIndex,
          name: state.name,
          date: state.date,
          time: state.time,
          subject: state.subject,
          body: state.body,
        }
        return state = updatedState
      }
    default:
      return state
  }
}

export default emailDetails