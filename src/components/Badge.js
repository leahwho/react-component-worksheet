import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

const Badge = (props) => {
  
  const badgeColor = () => {
    if (props.number < 100) {
      return 'under-100';
    } else if (props.number > 100 && props.number <= 1000) {
      return 'over-100';
    } else if (props.number > 1000) {
      return 'over-1000';
    }
  }
  
  // ternary for dual color option (put in className)
  //{props.number > 100 ? 'over-100' : 'under-100' }>{props.number}
  return (
    <p className={badgeColor()}>{props.number}</p>  
  );
};

Badge.propTypes = {
  number: PropTypes.number.isRequired
}

export default Badge