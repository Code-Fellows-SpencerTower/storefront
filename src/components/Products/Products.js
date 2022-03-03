import React from "react";
import { connect, useSelector } from 'react-redux';

function Products(props) {

  // render products based on the active category in categories

  console.log('PRODUCTS PROPS', props);

  const products = useSelector(state => state.products);
  console.log('useSelector PRODUCTS', products);


  return (
    <section id="products">
      {products.map((product, key) => {
        return (
          <div key={key}>
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