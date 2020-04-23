import React from "react";
import { Link, withRouter } from "react-router-dom";
import ReactPlayer from 'react-player';

class MediaShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='media-show-container'>
        <ReactPlayer url={this.props.emotion.contents.url}/>
      </div>
    )
  }
}

export default MediaShow;
