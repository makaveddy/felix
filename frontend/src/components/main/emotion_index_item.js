import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./felix_logo.png";

const EmotionIndexItem = ({ emotion }) => {
  // debugger
  return (
    <Link to={`/${emotion._id}`}>
      <div className='emotion-index-item-container'>
        <div className='emotion-index-item-image'>
          <img src={Logo} alt={`${emotion.name}`} />
        </div>
        <div className="emotion-index-item-title">{emotion.name}</div>
      </div>
    </Link>
  )
}

export default EmotionIndexItem;