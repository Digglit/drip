import { create } from "d3"


const createOrder = (state = false, action) => {
  switch (action.type) {
    case 'CREATE_ORDER':
      return state = !state
    default:
      return state
  }
}

export default createOrder