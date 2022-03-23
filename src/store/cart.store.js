
const initialState = {
  cart: [{
    name: 'Patagonia Jacket',
    description: 'Raingear',
    category: 'jackets',
    price: 120,
    inventory: 3,
  },],
}

const cartReducer = (state = initialState, action) => {
  // deconstruct type and payload from action
  let { type, payload } = action;

  switch (type) {
    case ('ADD_ITEM'): // multiple reducers can use the same statement to resopnd to the same action
      // add item to cart state as object
      // use spread operator to keep original state and add payload/item
      let newState = { ...state, cart: [...state.cart, payload] }
      console.log('New State', newState);
      return { ...state, cart: [...state.cart, payload] }
    // TODO: Add REMOVE_ITEM case
    case ('REMOVE_ITEM'):
      // update state to include products that do not include the product name of the one to be deleted
      return { ...state, cart: state.cart.filter(product => product.name !== payload.name) }
    default:
      return state;
  }
}

// can be used by multiple components
export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    payload: item,
  }
}

// will be imported by store/index.js and combined with other reducers
export default cartReducer;