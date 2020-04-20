import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product'

import './ProductList.css'

//props.productList.propName
// Product name
// Product image URL
// Standard Price
// Discount price
const ProductList = (props) => {

  const listOfProducts = props.productList.map((product, i) => {
    return (
      <li key={i}>
        <Product 
        name={product.name}
        imgUrl={product.imgUrl}
        alt={product.alt}
        standardPrice={product.standardPrice}
        discountPrice={product.discountPrice}
        />
      </li>
    );
  })

  return (
    <div className='product-list-div'>
      <ul className='products-list'>
        {listOfProducts}
      </ul>
    </div>
  );
}

ProductList.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  standardPrice: PropTypes.number,
  discountPrice: PropTypes.number
}

ProductList.defaultProps = {
  alt: 'product image'
}

export default ProductList;