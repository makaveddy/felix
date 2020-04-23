import { connect } from "react-redux";
import { getEmotions } from "../../actions/emotion_actions";
import MainPage from "./main_page";

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    emotions: state.emotions,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getEmotions: emotions => dispatch(getEmotions(emotions)),
});

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPageContainer;
