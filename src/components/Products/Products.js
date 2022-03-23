import React from "react";
import { connect, useSelector, useDispatch } from 'react-redux';
import store from "../../store";
import './products.css'

function Products(props) {

  // render products based on the active category in categories

  console.log('PRODUCTS PROPS', props);

  const { activeCategory } = useSelector(store => store.categories);

  const products = useSelector(store => {
    return activeCategory.displayName ?
      store.products.filter((product) => {
        return product.category === activeCategory.normalizedName
      })
      : store.products;
  })

  console.log('useSelector PRODUCTS', products);


  return (
    <section id="products">
      {products.map((product, key) => {
        return (
          <div class={'product'} key={product.name}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <p>{product.inventory > 0 ? 'Available' : 'Out of Stock'}</p>
          </div>
        )
      })}
    </section>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     categories: state.products,
//   }
// }

export default Products;