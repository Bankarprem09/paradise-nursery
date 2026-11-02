import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
    setShowProductList(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList && !showCart ? (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="aboutus-container">
            <AboutUs />
          </div>
        </div>
      ) : showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <ProductList onCartClick={handleCartClick} />
      )}
    </div>
  );
}

export default App;
