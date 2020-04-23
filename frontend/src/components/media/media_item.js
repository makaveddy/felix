import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from "./felix_logo.png";
import './media_item.css';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';

class MediaItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    debugger
    return (
      <div className="media-item-container">
        <div className='media-item-preview'>
          <ReactPlayer
            url={this.props.media.url} 
            width="100%" 
            height="100%"
            controls
            volume
            // light
            // playIcon
          />

        </div>
          {/* <ReactAudioPlayer 
            src={this.props.media.url}
            controls
            volume
          /> */}
        <div className='media-item-title'>{this.props.media.title}</div>
      </div>
    );
  }
}

export default MediaItem;