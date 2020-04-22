import { connect } from "react-redux";
// import { getMedia } from "../../actions/media_actions";
import MediaItem from './media_item'
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
  openModal: (modal) => dispatch(openModal(modal)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MediaItem);
