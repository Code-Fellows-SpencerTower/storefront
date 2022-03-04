// // 3 things for every reducer file:
// // * initialState object
// // * reducer function
// // * one or more actions

// // REDUX STORE -> Globalized State
// const initialState = {
//   categories: [
//     {
//       normalizedName: 'shoes',
//       displayName: 'Shoes',

//     },
//     {
//       normalizedName: 'jackets',
//       displayName: 'Jackets',
//     }
//   ],
//   products: [
//     {
//       name: 'Nike Shoes',
//       description: 'Shoes to wear on your feet',
//       category: 'shoes',
//       price: 70,
//       inventory: 5,
//     },
//     {
//       name: 'Patagonia Jacket',
//       description: 'Raingear',
//       category: 'jackets',
//       price: 120,
//       inventory: 3,
//     },
//   ],
//   activeCategory: '',
// }

// // REDUCER
// function storeReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case 'ACTIVE_CATEGORY':
//       if (state.categories.includes(payload)) {
//         return { ...state, activeCategory: payload }
//       }
//       break;
//     default:
//       return state;
//   }
// }

// // DISPATCH
// export function activateCategory(category) {
//   return {
//     type: 'ACTIVATE_CATEGORY',
//     payload: category.normalizedName,
//   }
// }


// export default storeReducer;