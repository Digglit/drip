

let initialState = {
  open: false,
  zIndex: 0,
  name: '',
}


const driverDetails = (state = initialState, action) => {
  switch(action.type) {
    case 'DISPLAY_DRIVER_DETAILS':
      if (action.payload.zIndex === 0) {
        return state = {open: false, zIndex: 0, name: state.name}
      } else {
        return state = {open: !state.open, zIndex: action.payload.zIndex, name: action.payload.values}
      }
      
    default:
      return state
  }
}

export default driverDetails