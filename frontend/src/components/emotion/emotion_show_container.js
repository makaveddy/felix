import { connect } from "react-redux";
import { getEmotion } from "../../actions/emotion_actions";
import EmotionShow from "./emotion_show";

const mapStateToProps = (state, ownProps) => {
  return {
    emotion: state.emotions[ownProps.match.params.emotionId],
    
  };
};

const mapDispatchToProps = (dispatch) => ({
  getEmotion: (emotionId) => dispatch(getEmotion(emotionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmotionShow);
