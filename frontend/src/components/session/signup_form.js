import React from "react";
import { Link, withRouter } from "react-router-dom";
import './session.css';
import Logo from './felix_logo.png';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li className='error' key={`error-${i}`}>{this.state.errors[error]}</li>
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
            </header>

            <input
              className="input"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />

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

            <input
              className="input"
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />

            <button className="button session-submit">Sign up</button>

            <div>{this.renderErrors()}</div>

            <Link to="/login">
              <footer className="session-form-content-footer">
                Already on Felix? Log in
              </footer>
            </Link>
          </div>
        </form>
        <a href="https://github.com/makaveddy/felix" className="session-links">
          GitHub
        </a>
      </div>
    );
  }
}

export default withRouter(SignupForm);
