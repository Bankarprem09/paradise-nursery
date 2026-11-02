import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList({ onCartClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "$15", description: "Produces oxygen at night, improving air quality." },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", cost: "$12", description: "Filters formaldehyde and xylene from the air." }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://cdn.pixabay.com/photo/2016/04/19/07/23/lavender-1338049_1280.jpg", cost: "$20", description: "Calming scent, used in aromatherapy." },
        { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2017/03/18/16/09/jasmine-2154267_1280.jpg", cost: "$18", description: "Sweet fragrance, blooms beautiful white flowers." }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prevState => ({ ...prevState, [plant.name]: true }));
  };

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="product-list-container">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <div className="nav-links">
          <span>Plants</span>
          <a href="#cart" onClick={onCartClick} className="cart-link">
            🛒 Cart ({totalCartCount})
          </a>
        </div>
      </nav>

      {plantsArray.map((category, index) => (
        <div key={index} className="category-section">
          <h2>{category.category}</h2>
          <div className="plants-grid">
            {category.plants.map((plant, pIndex) => (
              <div key={pIndex} className="plant-card">
                <img src={plant.image} alt={plant.name} className="plant-image" />
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <p className="plant-cost">{plant.cost}</p>
                <button
                  className={`add-to-cart-btn ${addedToCart[plant.name] ? 'added' : ''}`}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
