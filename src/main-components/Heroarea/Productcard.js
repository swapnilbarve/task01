import React from 'react';
import './Banner.css';


const ProductCard = ({productimg}) => {
  return (
    <div className='productCart'>


      <div className="product">
        <img src={productimg} alt="Product Image"
         className="product-image" />
        <div className="product-details">
          <h2 className="product-title">Men Henley Neck
            Full Sleeve Red Wine</h2>
          <p className="discount-price">₹399
          <span className="original-price">₹1299</span></p>

          <div className='productsize'>
                <div className='size'>S</div>
                <div className='size'>M</div>
                <div className='size'>L</div>
                <div className='size'>XL</div>
                <div className='size'>XXL</div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default ProductCard;
