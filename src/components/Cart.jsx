import React from 'react'

const Cart = ( {cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}> {item.name} is in your cart
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;