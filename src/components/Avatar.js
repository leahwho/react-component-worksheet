import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css'

const Avatar = (props) => {
  return (
    <img className='avatar-image' src={props.imgUrl} alt={props.alt} />
  );
};

Avatar.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string
};

Avatar.defaultProps = {
  alt: 'the user avatar'
};

export default Avatar