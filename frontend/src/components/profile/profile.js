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
          key={favorite.id}
          favorite={favorite}
          removeFavorite={this.props.removeFavorite}
        />
       )
      }
      if (favorite.contentEmotion === "Sad") {
        sadFavorites.push(
          <FavoriteItem
            key={favorite.id}
            favorite={favorite}
            removeFavorite={this.props.removeFavorite}
          />
        );
      }
      if (favorite.contentEmotion === "Angry") {
        angryFavorites.push(
          <FavoriteItem
            key={favorite.id}
            favorite={favorite}
            removeFavorite={this.props.removeFavorite}
          />
        );
      }
      if (favorite.contentEmotion === "Fearful") {
        fearfulFavorites.push(
          <FavoriteItem
            key={favorite.id}
            favorite={favorite}
            removeFavorite={this.props.removeFavorite}
          />
        );
      }
      if (favorite.contentEmotion === "Motivated") {
        motivatedFavorites.push(
          <FavoriteItem
            key={favorite.id}
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
      <div className="profile-show-container">
        <h1 className="profile-show-header">{this.props.user.username}</h1>

        <div className='profile-show-content'>

          <div className={`profile-show-media ${happyHide}`}>
            <h2 className="profile-show-media-title">Happy</h2>
            <div className="profile-show-underline"></div>
            <div className="profile-show-media-items">
              {happyFavorites}
            </div>
          </div>

          <div className={`profile-show-media ${sadHide}`}>
            <h2 className="profile-show-media-title">Sad</h2>
            <div className="profile-show-underline"></div>
            <div className="profile-show-media-items">
              {sadFavorites}
            </div>
          </div>

          <div className={`profile-show-media ${motivatedHide}`}>
            <h2 className="profile-show-media-title">Motivated</h2>
            <div className="profile-show-underline"></div>
            <div className="profile-show-media-items">
              {motivatedFavorites}
            </div>
          </div>

          <div className={`profile-show-media ${fearfulHide}`}>
            <h2 className="profile-show-media-title">Fearful</h2>
            <div className="profile-show-underline"></div>
            <div className="profile-show-media-items">
              {fearfulFavorites}
            </div>
          </div>

          <div className={`profile-show-media ${angryHide}`}>
            <h2 className="profile-show-media-title">Angry</h2>
            <div className="profile-show-underline"></div>
            <div className="profile-show-media-items">
              {angryFavorites}
            </div>
          </div>

          
        </div>
      </div>
    );
  }
}

export default Profile;
