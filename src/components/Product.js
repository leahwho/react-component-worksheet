import React from 'react';
import './Product.css';
import PropTypes from 'prop-types'

//productInfo
const Product = (props) => {
  
  const strikeOut = () => {
    return props.discountPrice ?
      'standard-price strike-out' :
      'standard-price';
  }
  
  return (
    <div className='product'>
      <img className='product-image' src={ props.imgUrl } alt={ props.alt } />
      <h2 className='product-name'>{props.name}</h2>
      <h3 className='product-price'>
      <span className='discount-price'>{props.discountPrice}</span>
      <span className={strikeOut()}>{props.standardPrice}</span>
      </h3>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
  standardPrice: PropTypes.number.isRequired,
  discountPrice: PropTypes.number
}

Product.defaultProps = {
  alt: 'clothing image',
  discountPrice: undefined
}

export default Product