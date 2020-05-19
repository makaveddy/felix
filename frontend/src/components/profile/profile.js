import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./profile.css";
import FavoriteItem from '../favorite/favorite_item';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFavorites(this.props.user.id);
  }


  render() {

    if (typeof this.props.favorites[0] === "undefined") {
      return null;
    }

    let happyFavorites =[];
    let sadFavorites = [];  
    let angryFavorites = [];  
    let fearfulFavorites = [];  
    let motivatedFavorites = [];  
    
    const allFavorites = Object.values(this.props.favorites[0]).forEach((favorite) => {
      if (favorite.contentEmotion === "Happy") {
       happyFavorites.push( 
        <FavoriteItem
          key={favorite._id}
          favorite={favorite}
          removeFavorite={this.props.removeFavorite}
        />
       )
      }
      if (favorite.contentEmotion === "Sad") {
        sadFavorites.push(
          <FavoriteItem
            key={favorite._id}
            favorite={favorite}
            removeFavorite={this.props.removeFavorite}
          />
        );
      }
      if (favorite.contentEmotion === "Angry") {
        angryFavorites.push(
          <FavoriteItem
            key={favorite._id}
            favorite={favorite}
            removeFavorite={this.props.removeFavorite}
          />
        );
      }
      if (favorite.contentEmotion === "Fearful") {
        fearfulFavorites.push(
          <FavoriteItem
            key={favorite._id}
            favorite={favorite}
            removeFavorite={this.props.removeFavorite}
          />
        );
      }
      if (favorite.contentEmotion === "Motivated") {
        motivatedFavorites.push(
          <FavoriteItem
            key={favorite._id}
            favorite={favorite}
            removeFavorite={this.props.removeFavorite}
          />
        );
      }
    });

    const happyHide = happyFavorites.length ? '' : 'hide';
    const sadHide = sadFavorites.length ? '' : 'hide';
    const angryHide = angryFavorites.length ? '' : 'hide';
    const fearfulHide = fearfulFavorites.length ? '' : 'hide';
    const motivatedHide = motivatedFavorites.length ? '' : 'hide';

    return (
      <div className="profile-container">
        <h1 className="profile-header">{this.props.user.username}</h1>

        <div className='profile-content'>

          <div className={`profile-media ${happyHide}`}>
            <h2 className="profile-media-title">Happy</h2>
            <div className="profile-underline"></div>
            <div className="profile-media-items">
              {happyFavorites}
            </div>
          </div>

          <div className={`profile-media ${sadHide}`}>
            <h2 className="profile-media-title">Sad</h2>
            <div className="profile-underline"></div>
            <div className="profile-media-items">
              {sadFavorites}
            </div>
          </div>

          <div className={`profile-media ${motivatedHide}`}>
            <h2 className="profile-media-title">Motivated</h2>
            <div className="profile-underline"></div>
            <div className="profile-media-items">
              {motivatedFavorites}
            </div>
          </div>

          <div className={`profile-media ${fearfulHide}`}>
            <h2 className="profile-media-title">Fearful</h2>
            <div className="profile-underline"></div>
            <div className="profile-media-items">
              {fearfulFavorites}
            </div>
          </div>

          <div className={`profile-media ${angryHide}`}>
            <h2 className="profile-media-title">Angry</h2>
            <div className="profile-underline"></div>
            <div className="profile-media-items">
              {angryFavorites}
            </div>
          </div>

          
        </div>
      </div>
    );
  }
}

export default Profile;
