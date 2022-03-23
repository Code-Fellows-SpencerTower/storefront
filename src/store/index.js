import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./cart.store";
import productReducer from './product.store';
import categoryReducer from "./categories.store";
import { addItem } from "./cart.store";


// pass reducers into combineReducers()
let reducers = combineReducers({
  cart: cartReducer,
  products: productReducer,
  categories: categoryReducer,
});

// export default function createReduxStore() {
//   return createStore(reducers, composeWithDevTools());
// }

const createReduxStore = () => {
  return createStore(reducers, composeWithDevTools());
}

export default createReduxStore();



// // REDUCER
// import storeReducer from "./storeReducer";

// // combine reducers in index, then create the redux store by passing the reducers into createStore

// // using arrow function allows us to export it and create the store in another file by running it there rather than when it is imported, allows it to run when it is needed:
// const createReduxStore = () => {
//   // composeWithDevTools() allows to check with Redux DevTools extension in chrome
//   return createStore(storeReducer, composeWithDevTools());
// }

// export default createReduxStore();