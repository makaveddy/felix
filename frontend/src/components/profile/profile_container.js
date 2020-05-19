import { connect } from "react-redux";
import Profile from "./profile";
import { fetchFavorites, removeFavorite } from '../../actions/favorite_actions';

const mapStateToProps = (state) => {
  return {
    user: state.session.user,
    favorites: Object.values(state.favorites)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavorites: userId => dispatch(fetchFavorites(userId)),
    removeFavorite: favoriteId => dispatch(removeFavorite(favoriteId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
