import { connect } from "react-redux";
// import { fetchEmotion } from "../../actions/emotion_actions";
import EmotionShow from "./emotion_show";

const mapStateToProps = (state, ownProps) => {
  return {
    // pin: state.entities.pins[ownProps.match.params.pinId],
    // boards: state.entities.boards,
    // currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // fetchEmotion: (EmotionId) => dispatch(fetchEmotion(emotionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmotionShow);
