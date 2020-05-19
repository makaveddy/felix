import { connect } from "react-redux";
import MediaShow from "./media_show";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: (modal) => dispatch(closeModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaShow);
