import React from "react";
import { useSelector } from "react-redux";

// shows list of items in cart
function SimpleCart(props) {

  const cart = useSelector(state => state.cart);

  return (
    <>
      <p>CART {props.cart ? props.cart.length : 0}</p>
      {props.carts ?
        <section id="cart-list">
          {props.cart.map((item, key) => {
            return (
              <p id={key}>{item.name}</p>
            )
          })}
        </section>
        : null
      }
    </>

  )
}

export default SimpleCart;