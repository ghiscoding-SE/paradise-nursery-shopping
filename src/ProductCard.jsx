import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from './CartSlice';

function ProductCard({ category }) {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState({});
    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({ ...prevState, [plant.name]: true }));
    };
    
    return (
        <div>
            <h2 className="plantname_heading">{category.category}</h2>
            <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                    <div key={plantIndex} className="product-card">
                        <img className="product-image" src={plant.image} alt={plant.name} />
                        <h3 className="product-title">{plant.name}</h3>
                        <p className="product-description">{plant.description}</p>
                        <p className="product-price">{plant.cost}</p>
                        <button
                            className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                            onClick={() => handleAddToCart(plant)}
                            disabled={addedToCart[plant.name]}
                        >
                            {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCard;
