
// update state of products for products in inventory when a category is selected
// function productReducer(state = initialState, action) {

// }

const initialState = [{
  name: 'Nike Shoes',
  description: 'Shoes to wear on your feet',
  category: 'shoes',
  price: 70,
  inventory: 5,
},
{
  name: 'Patagonia Jacket',
  description: 'Raingear',
  category: 'jackets',
  price: 120,
  inventory: 3,
},
];


const productReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ADD ITEM':
      // check state for item
      // if item is present, decrement inventory
      // return state with updated item
      for (let i = 0; i < state.length; i++) {
        if (state[i].name === payload.name) {
          // decrement inventory in payload
          state[i].inventory -= 1;
          // update state with new inventory
        }
      }
      return state;
    default:
      return state;
  }
}

export default productReducer;