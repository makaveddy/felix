import { connect } from "react-redux";
import Profile from "./profile";

const mapStateToProps = (state) => {
  // debugger
  return {
    user: state.session.user,
  };
};

export default connect(mapStateToProps, null )(Profile);
