import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from "./felix_logo.png";
import './media_item.css';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';

class MediaItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleFavorite(e) {
    e.preventDefault();
    const {id, title, url, emotion} = this.props.media;
    const userId = this.props.userId;
    const contentId = id;
    const contentTitle = title;
    const contentUrl = url;
    const contentEmotion = emotion;
    
    let contentIds = [];
    let favoriteIds = [];

    // debugger

    Object.values(this.props.favorites).forEach(favorite => {
      contentIds.push(favorite.contentId);
      favoriteIds.push(favorite._id);
      // debugger
    });
    
    // console.log(contentIds)
    if (contentIds.includes(contentId)) {
      const index = contentIds.indexOf(contentId);
      // debugger
      this.props.removeFavorite(favoriteIds[index]);

    } else {
      this.props.createFavorite({ userId, contentId, contentTitle, contentEmotion, contentUrl});
      // debugger
    };

    e.target.classList.toggle("red");
  }
  
  render () {

    if (!this.props.favorites) {
      return null;
    }
    
    const {id} = this.props.media;
    let contentIds = [];

    // debugger
    if (this.props.favorites) {
    Object.values(this.props.favorites).forEach(favorite => {
      contentIds.push(favorite.contentId);
    })};

    let favoriteButton;
    if (contentIds.includes(id)) {
     favoriteButton = 'red';
    } else {
      favoriteButton = '';
    }

    return (
      <div className="media-item-container">
        <div className="media-item-preview">
          <ReactPlayer
            url={this.props.media.url}
            width="100%"
            height="100%"
            controls
            volume={1}
          />
        </div>

        <div className='media-item-info'>
          <div div className="media-item-title">{this.props.media.title}</div>
          <i onClick={this.handleFavorite} className={`far fa-heart ${favoriteButton}`}></i>
        </div>
      </div>
    );
  }
}

export default MediaItem;