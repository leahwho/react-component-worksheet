import React from 'react';

import Badge from './Badge';
import Avatar from './Avatar';
import PropTypes from 'prop-types';

import './UserCard.css';

//props.cardInfo.
const UserCard = (props) => {
  return (
    <div className='user-container'>
      <section className='user-card'>
        <div className='user-avatar'> <Avatar imgUrl={props.cardInfo.imgUrl} /></div>
        
        <div className='user-badge'><Badge number={props.cardInfo.score}/></div>
        
        <h2 className='user-name'>{props.cardInfo.name}</h2>
        
        <h3 className='user-rank'>{props.cardInfo.rank}</h3>
        
        
      </section>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  alt: PropTypes.string,
  rank: PropTypes.string,
  score: PropTypes.number
}

UserCard.defaultProps = {
  imgUrl: 'https://thumbs.dreamstime.com/b/default-placeholder-profile-icon-avatar-gray-woman-90197997.jpg',
  alt: 'default avatar with a cool haircut',
  rank: 'Newb',
  score: 0
}

export default UserCard