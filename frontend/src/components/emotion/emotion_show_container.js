import { connect } from "react-redux";
import { getEmotion } from "../../actions/emotion_actions";
import EmotionShow from "./emotion_show";
import { createFavorite, removeFavorite, fetchFavorites } from '../../actions/favorite_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    userId: state.session.user.id,
    emotion: state.emotions,
    ownProps: ownProps,
    favorites: Object.values(state.favorites),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmotion: (emotionId) => dispatch(getEmotion(emotionId)),
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    removeFavorite: (favoriteId) => dispatch(removeFavorite(favoriteId)),
    fetchFavorites: (userId) => dispatch(fetchFavorites(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmotionShow);
