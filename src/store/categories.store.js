
const initialState = {
  categories: [
    {
      normalizedName: 'shoes',
      displayName: 'Shoes',

    },
    {
      normalizedName: 'jackets',
      displayName: 'Jackets',
    }
  ],
  activeCategory: '',
}

const categoryReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ACTIVE_CATEGORY':
      // set action.payload to active category
      // return state.activeCategory = payload.categories.normalizedName;
      return { ...state, activeCategory: payload }
    default:
      return state;
  }
}

export default categoryReducer;