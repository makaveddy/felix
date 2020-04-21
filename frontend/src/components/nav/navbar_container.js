import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import NavBar from "./navbar";

const mapStateToProps = (state) => {
  // debugger
  return {
    loggedIn: state.session.isAuthenticated,
    user: state.session.user
  }};

export default connect(mapStateToProps, { logout })(NavBar);
