import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./felix_logo.png";

const EmotionIndexItem = ({ emotion }) => {
  let icon;
  if (emotion.name === 'Happy') {icon = <i className="far fa-smile"></i>;}
  if (emotion.name === 'Sad') {icon = <i className="far fa-sad-tear"></i>;}
  if (emotion.name === 'Angry') {icon = <i className="far fa-angry"></i>;}
  if (emotion.name === 'Fearful') {icon = <i className="far fa-flushed"></i>;}
  if (emotion.name === 'Motivated') {icon = <i className="far fa-laugh-beam"></i>;}

  return (
    <Link to={`/${emotion._id}`}>
      <div className='emotion-index-item-container'>
        <div className='emotion-index-item-image'>
          {icon}
        </div>
        <div className="emotion-index-item-title">{emotion.name}</div>
      </div>
    </Link>
  )
}

export default EmotionIndexItem;