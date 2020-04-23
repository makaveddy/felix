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
    debugger

    
    if (typeof this.props.emotion === "undefined") {
      return null;
    } 
    
    if (typeof this.props.emotion.data === "undefined") {
      return null;
    } 

    if (typeof this.props.emotion.data.contents === "undefined") {
      return null;
    } 

    const allMedia = this.props.emotion.data.contents.map((media) => (
      <MediaItem key={media.id} media={media} />
    ));

    return (
      <div className="emotion-show-container">
        <h1 className="emotion-show-header">{this.props.emotion.data.name}</h1>
        <div className="emotion-show-content">

          <div className="emotion-show-media">
            <h2 className="emotion-show-media-title">Video</h2>
            <div className="emotion-show-underline"></div>
            <div className="emotion-show-media-items">
              {allMedia}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmotionShow;