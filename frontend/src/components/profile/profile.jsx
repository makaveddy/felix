import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const allMedia = emotions.map(emotion => (
    //   <EmotionIndexItem key={emotion.id} emotion={emotion} />
    // ))
    debugger

    return (
      <div className="profile-show-container">
        <h1 className="profile-show-header">{this.props.user.username}</h1>
        <div className="profile-show-content">
          <div className="profile-show-media">
            <h2 className="profile-show-media-title">Happy</h2>
            <div className="profile-show-underline"></div>
            <div className="profile-show-media-items">
              <div className="profile-show-media-item">videoitem</div>
              <div>videoitem</div>
              <div>videoitem</div>
              <div>videoitem</div>
            </div>
          </div>

          <div className="profile-show-media">
            <h2 className="profile-show-media-title">Sad</h2>
            <div className="profile-show-underline"></div>
            <div className="profile-show-media-items">
              <div>audioitem</div>
              <div>audioitem</div>
              <div>audioitem</div>
              <div>audioitem</div>
            </div>
          </div>

          <div className="profile-show-media">
            <h2 className="profile-show-media-title">Excitement</h2>
            <div className="profile-show-underline"></div>
            <div className="profile-show-media-items">
              <div>audioitem</div>
              <div>audioitem</div>
              <div>audioitem</div>
              <div>audioitem</div>
            </div>
          </div>

          <div className="profile-show-media">
            <h2 className="profile-show-media-title">Anger</h2>
            <div className="profile-show-underline"></div>
            <div className="profile-show-media-items">
              <div>audioitem</div>
              <div>audioitem</div>
              <div>audioitem</div>
              <div>audioitem</div>
            </div>
          </div>

          <div className="profile-show-media">
            <h2 className="profile-show-media-title">Fear</h2>
            <div className="profile-show-underline"></div>
            <div className="profile-show-media-items">
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

export default Profile;
