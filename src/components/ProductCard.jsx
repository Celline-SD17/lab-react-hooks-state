import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>

      {/* TODO: Implement Add to Cart button functionality */}
      <button 
        data-testid={'product-' + product.id} 
        onClick={() => 
          addToCart(product)
        }
      >
        Add to Cart
     
      </button>
    </div>
  );
};
export default ProductCard;