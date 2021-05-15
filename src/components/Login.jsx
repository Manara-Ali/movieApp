import "./Login.css";

// STEP 1. IMPORT REACT
import React from "react";

// STEP 2. ADDITIONAL IMPORTS GO HERE

// STEP 3. CREATE FUNCTION BASED COMPONENT
// const Login = () => {
//   return <div className="login-page">This is the Login Page</div>;
// };

// REFACTOR THE LOGIN COMPONENT
class Login extends React.Component {
  // I need to be able to collect user data
  constructor(props) {
    super(props);

    this.state = {
      loginName: "",
      loginPassword: "",
    };
  }

  // Verify Login information
  verifyCredentials = () => {
    console.log("verifying credentials");
    console.log(this.props.loginInfo);
  };

  // I need a helper function for handling username
  handleLoginNameInputChange = (e) => {
    this.setState({ loginName: e.target.value });
  };

  // I need a helper function for handling password
  handleLoginPasswordInputChange = (e) => {
    this.setState({ loginPassword: e.target.value });
  };

  // I need a helper function to handle form submission
  handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("I am logged in!");
    console.log(this.state.loginName, this.state.loginPassword);
    // write code to verify username and password with users in our database
    this.verifyCredentials();
  };

  render() {
    return (
      <div className="signup-page">
        <div id="container">
          <div className="form-wrap">
            <h1>Login</h1>
            <form onSubmit={this.handleFormSubmission}>
              <div className="form-group">
                <p className="feedback"></p>
              </div>
              <div className="form-group">
                <label htmlFor="first-name">Username</label>
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  onChange={this.handleLoginNameInputChange}
                  value={this.state.loginName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handleLoginPasswordInputChange}
                  value={this.state.loginPassword}
                />
              </div>
              <button type="submit" className="btn">
                Login
              </button>
            </form>
          </div>
          <footer>
            <p>
              Don't have an account? <a href="/sign-up">Sign Up Here</a>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

// STEP 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF THE APPLICATION
export default Login;
