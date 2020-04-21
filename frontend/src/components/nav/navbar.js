import React from "react";
import { Link } from "react-router-dom";
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
    // debugger
    return (
      // <div>
      //   {this.getLinks()}
      // </div>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img className="logo-small" src={Logo} alt="Felix logo" />
          </Link>
        </div>
        <Link to="/">
          <div className="nav-title">Felix</div>
        </Link>
        <div className="nav-logout">
          <Link to={`/profile`}><button>{user.username}</button></Link> 
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      </div>
    );
  }
}

export default NavBar;

