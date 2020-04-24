import { connect } from "react-redux";
import { getEmotion } from "../../actions/emotion_actions";
import EmotionShow from "./emotion_show";
import { createFavorite } from '../../actions/favorite_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    userId : state.session.user.id,
    emotion: state.emotions,
    ownProps: ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    getEmotion: (emotionId) => dispatch(getEmotion(emotionId)),
    createFavorite: favorite => dispatch(createFavorite(favorite))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmotionShow);
