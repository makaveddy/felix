import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import MediaItem from '../media/media_item';
import './emotion_show.css';

class EmotionShow extends React.Component {
  constructor(props) {
    super(props)
    
    
  }

  componentWillMount() {
    this.props.getEmotion(this.props.emotion.id);
  }

  render() {

    //const allMedia = medias.map(media => (
    //   <MediaItem key={mediaitem.id} media={media} />
    // ))

    return (
      <div className="emotion-show-container">
        <h1 className="emotion-show-header">{this.props.emotion.name}</h1>
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