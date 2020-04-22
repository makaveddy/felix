import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from "./felix_logo.png";
import './media_item.css';

class MediaItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    debugger
    return (
      <div className="media-item-container" onClick={() => this.props.openModal("view")}>
        <div className='media-item-preview'>
          <img src={Logo} alt='emotion' />
        </div>
        <div className='media-item-title'>title</div>
      </div>
    );
  }
}

export default MediaItem;