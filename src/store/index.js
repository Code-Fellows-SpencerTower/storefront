import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// REDUCER
import storeReducer from "./storeReducer";


// combineReducers

// using arrow function allows us to export it and create the store in another file by running it there rather than when it is imported, allows it to run when it is needed:
const createReduxStore = () => {
  // composeWithDevTools() allows to check with Redux DevTools extension in chrome
  return createStore(storeReducer, composeWithDevTools());
}

export default createReduxStore();