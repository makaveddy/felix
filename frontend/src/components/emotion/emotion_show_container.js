import { connect } from "react-redux";
import { getEmotion } from "../../actions/emotion_actions";
import EmotionShow from "./emotion_show";

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    emotion: state.emotions,
    ownProps: ownProps,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getEmotion: (emotionId) => dispatch(getEmotion(emotionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmotionShow);
