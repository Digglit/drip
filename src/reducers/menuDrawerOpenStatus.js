
let initialState = {
  open: false,
  switched: true,
  sections: [
    'Appetizers',
    'Specialty Pies',
    'Subs & Wraps',
    'Burgers'
  ],
  sectionSelected: -1,
  name: '',
  price: '$',
  itemDescription: '',
  modifiers: [],
  image: null,
}

const menuDrawerOpenStatus = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MENU_ITEM_DRAWER':
      let newState = state
      newState.open = !newState.open
      return state = newState
    case 'OPEN_MENU_ITEM_DRAWER_WITH_DETAILS':
      let newStateWithDetails = action.payload
      newStateWithDetails.open = !state.open
      return state = newStateWithDetails
    default:
      return state
  }
}

export default menuDrawerOpenStatus