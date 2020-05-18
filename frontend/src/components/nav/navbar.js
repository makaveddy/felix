import React from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "./felix_logo.png";
import './navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    // this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  // getLinks() {
  //   if (this.props.loggedIn) {
  //     return (
  //       <div>
  //         <Link to={"/profile"}>Profile</Link>
  //         <button onClick={this.logoutUser}>Logout</button>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <Link to={"/signup"}>Signup</Link>
  //         <Link to={"/login"}>Login</Link>
  //       </div>
  //     );
  //   }
  // }

  render() {
    const { user } = this.props;
    return (
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img className="logo-small" src={Logo} alt="Felix logo" />
            <span>elix</span>
          </Link>
        </div>
        <div className="nav-logout">
          <a href="https://github.com/makaveddy/felix" target='_blank' className="">GitHub</a>
          <button onClick={() => this.props.history.push("/team")}>Team</button>
          <button onClick={() => this.props.history.push("/profile")}>{user.username}</button>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
// export default NavBar;

