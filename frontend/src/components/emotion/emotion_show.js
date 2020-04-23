import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import MediaItem from '../media/media_item';
import './emotion_show.css';

class EmotionShow extends React.Component {
  constructor(props) {
    super(props)
    
    
  }

  componentDidMount() {
    this.props.getEmotion(this.props.ownProps.match.params.emotionId);
  }

  render() {

    //const allMedia = medias.map(media => (
    //   <MediaItem key={mediaitem.id} media={media} />
    // ))
    // debugger

    if (typeof this.props.emotion === "undefined") {
      return null;
    } 

    if (typeof this.props.emotion.data === "undefined") {
      return null;
    } 

    return (
      <div className="emotion-show-container">
        <h1 className="emotion-show-header">{this.props.emotion.data.name}</h1>
        <div className="emotion-show-content">

          <div className="emotion-show-media">
            <h2 className="emotion-show-media-title">Video</h2>
            <div className="emotion-show-underline"></div>
            <div className="emotion-show-media-items">
              <MediaItem />
              <MediaItem />
              <MediaItem />
            </div>
          </div>

          <div className="emotion-show-media">
            <h2 className="emotion-show-media-title">Audio</h2>
            <div className="emotion-show-underline"></div>
            <div className="emotion-show-media-items">
              <div>audioitem</div>
              <div>audioitem</div>
              <div>audioitem</div>
              <div>audioitem</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmotionShow;