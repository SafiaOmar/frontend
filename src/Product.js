import React from 'react';
import "./product.css";
function Product({title,image,price}) {
    return (
        <div  className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className='product_price'> 
                <small>$</small>
                <strong>{price}</strong>
                 </p>
                  <img src={image}
        alt=""/>
          <button> Add to cart </button>

            </div>
        
        </div>
    )
}

export default Product
