import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../media/media_item.css';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';

class FavoriteItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleUnfavorite = this.handleUnfavorite.bind(this);
  }

  handleUnfavorite(e) {
    e.preventDefault();
    debugger
    const favoriteId = this.props.favorite._id
    this.props.removeFavorite(favoriteId);
  }

  render () {
    debugger



    return (
      <div className="media-item-container">
        <div className="media-item-preview">
          <ReactPlayer
            url={this.props.favorite.contentUrl}
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
        <div className='media-item-info'>
          <div className="media-item-title">
            {this.props.favorite.contentTitle}
          </div>
          <i className="far fa-heart red" onClick={this.handleUnfavorite}></i>
        </div>
      </div>
    );
  }
}

export default FavoriteItem;