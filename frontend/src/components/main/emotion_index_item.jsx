import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./felix_logo.png";

const EmotionIndexItem = (props) => {
  return (
    <Link to={`/emotion`}>
      <div className='emotion-index-item-container'>
        <div className='emotion-index-item-image'>
          <img src={Logo} alt='emotion' />
        </div>
        <div className="emotion-index-item-title">emotion</div>
      </div>
    </Link>
  )
}

export default EmotionIndexItem;