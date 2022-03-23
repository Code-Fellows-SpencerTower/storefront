
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
  activeCategory: {},
}

const categoryReducer = (state = initialState, action) => {
  console.log('ACTION', action);
  let { type, payload } = action;
  switch (type) {
    case 'CHANGE_CATEGORY':
      // set action.payload to active category
      // return state.activeCategory = payload.categories.normalizedName;
      return { ...state, activeCategory: payload }
    default:
      return state;
  }
}

export const changeCategory = (category) => {
  return {
    type: 'CHANGE_CATEGORY',
    payload: category,
  }
}

export default categoryReducer;