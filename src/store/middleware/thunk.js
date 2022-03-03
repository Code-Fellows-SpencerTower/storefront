
const thunk = (store) => (next) => (action) {

  // if action is a function, run function and dispatch the
  return typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
}

export default thunk;