

let initialState = {
  open: false,
  zIndex: 0,
  driverSelected: 0,
  drivers: [
    {
      name: 'ZackG',
      deliveries: 0,
      averageDeliveryTime: '',
      rating: 0,
      totalHours: 0,
      revenueFacilitated: 0,
      tipsEarned: 0,
      email: '',
      phoneNumber: '',
      carMake: '',
      carModel: '',
      carYear: 0,
      carColor: '',
      licensePlateNumber: ''
    },
    {
      name: 'Casey',
      deliveries: 0,
      averageDeliveryTime: '',
      rating: 0,
      totalHours: 0,
      revenueFacilitated: 0,
      tipsEarned: 0,
      email: '',
      phoneNumber: '',
      carMake: '',
      carModel: '',
      carYear: 0,
      carColor: '',
      licensePlateNumber: ''
    }
  ]
}


const driverDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_DRIVER_DETAILS':
      if (action.payload === undefined || action.payload.zIndex === 0) {
        return state = { open: false, zIndex: 0, driverSelected: state.driverSelected, drivers: state.drivers }
      } else {
        return state = { open: !state.open, zIndex: action.payload.zIndex, driverSelected: action.payload.values, drivers: state.drivers }
      }

    default:
      return state
  }
}

export default driverDetails