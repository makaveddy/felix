import React from "react";
import { Link, withRouter } from "react-router-dom";
import './session.css';
import Logo from "./felix_logo.png";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password,
    };

    this.props.login(user);
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({ username: "demo_user", password: "starwars" });
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="error" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-container">
        <form className="session-form-box" onSubmit={this.handleSubmit}>
          <div className="session-form-content">
            <header className="session-form-header">
              <img src={Logo} alt="Felix logo" className="logo" />
              <h1>Welcome to Felix</h1>
              <p>An emotion-based media curation app</p>
            </header>

            <input
              className="input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />

            <input
              className="input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />

            <button className="button session-submit">Log in</button>
            <button className="button session-demo" onClick={this.demoLogin}>Demo Log in</button>

            <div>{this.renderErrors()}</div>

            <Link to="/signup">
              <footer className="session-form-content-footer">
                Not on Felix? Sign up
              </footer>
            </Link>
          </div>
        </form>
        
        <div className="session-links">
          <Link to="/team">Team</Link>
          <a href="https://github.com/makaveddy/felix" target='_blank'>GitHub</a>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);

