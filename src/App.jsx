import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import  styles from "./styles/DarkMode.module.css"

const App = () => {
const [darkMode, setDarkMode] = useState (false);
const [cartItems, setCartItems] = useState([]);
const [selectedCategory, setSelectedCategory] = useState("All");
const products = [
  {id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true},
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
];
//state for adding items to cart
function addToCart(product) {
  
  setCartItems([...cartItems, product]);
}
//state for filtering cart products
const filteredProducts = selectedCategory === "All"
  ? products : products.filter((product) => product.category === selectedCategory);
  return (
    <div className={darkMode ? styles.dark : styles.light}>
      
      <h1>🛒 Shopping App</h1>
      {/*set dark mode*/}
      <DarkModeToggle  darkMode={darkMode} setDarkMode={setDarkMode}/>

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        >
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList products={filteredProducts} addToCart={addToCart} />
      <Cart cartItems={cartItems} />

      {/* TODO: Implement and render Cart component */}
    </div>
  );
}
export default App; 
