import React, { useState } from "react";

function Categories() {

  // categories reducer
  let [categories, setCategories] = useState();

  const initialState = {
    categories: [],
    products: [
      { shoes: 'Nike' },
      { shoes: 'Adidas' },
      { jacket: 'Patagonia' },
      { jacket: 'North Face' },
    ],
    activeProduct: {},
  }

  
  function categoriesReducer(state, action) {
    let { type, payload } = action;
    switch (type) {
      case 'ADD_PRODUCT':
        return { ...state, products: [...state.product, payload] }
    }
  }

  return (
    <>
    </>
  );
}

export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  }
}

export default Categories;