import "./SignUp.css";

// STEP 1. IMPORT REACT
import React from "react";

// STEP 2. ADDITIONAL IMPORTS GO HERE

// STEP 3. CREATE FUNCTION BASED COMPONENT
// const SignUp = () => {
//   return <div className="signup-page">This is the Sign up page</div>;
// };

const userDataBase = [];

// I NEED TO REFACTOR THIS FORM TO BE ABLE TO USE STATE AND STORE USER DATA
class SignUp extends React.Component {
  // I need to be able to collect user data
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password1: "",
      password2: "",
    };
  }

  // I need a helper function for collecting and handling first name input
  handleFirstNameInputChange = (e) => {
    this.setState({ firstName: e.target.value });
  };
  // I need a helper function for collecting and handling last name input
  handleLastNameInputChange = (e) => {
    this.setState({ lastName: e.target.value });
  };
  // I need a helper function for collecting and handling user name input
  handleUserNameInputChange = (e) => {
    this.setState({ userName: e.target.value });
  };
  // I need a helper function for collecting and handling email input
  handleEmailInputChange = (e) => {
    this.setState({ email: e.target.value });
  };
  // I need a helper function for collecting and handling password input
  handlePasswordInputChange = (e) => {
    this.setState({ password1: e.target.value });
  };
  // I need a helper function for collecting and handling confirm password input
  handleConfirmPasswordInputChange = (e) => {
    this.setState({ password2: e.target.value });
  };

  // I need a helper function for handling form submission
  handleFormSubmission = (e) => {
    e.preventDefault();
    userDataBase.push(this.state);
    console.log("I was submitted!");
    console.log(userDataBase);
    this.setState({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password1: "",
      password2: "",
    });
  };

  // WRITE CODE SOMEWHERE HERE TO DO FORM VALIDATION ON THE PASSWORD DATA

  render() {
    return (
      <div className="signup-page">
        <div id="container">
          <div className="form-wrap">
            <h1>Sign Up</h1>
            <p>Join millions of movie junkies like you today!</p>
            <form onSubmit={this.handleFormSubmission}>
              <div className="form-group">
                <p className="feedback"></p>
              </div>
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  onChange={this.handleFirstNameInputChange}
                  value={this.state.firstName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  onChange={this.handleLastNameInputChange}
                  value={this.state.lastName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={this.handleUserNameInputChange}
                  value={this.state.userName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.handleEmailInputChange}
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handlePasswordInputChange}
                  value={this.state.password1}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input
                  type="password"
                  name="pasword2"
                  id="password2"
                  onChange={this.handleConfirmPasswordInputChange}
                  value={this.state.password2}
                />
              </div>
              <button type="submit" className="btn">
                Sign Up
              </button>
              {/* <p className="bottom-text">
                By clicking the Sign Up button, you agree to our
                <a href="#">Terms & Conditions</a> and
                <a href="#">Privacy Policy</a>
              </p> */}
            </form>
          </div>
          <footer>
            <p>
              Already have an account? <a href="/login">Login Here</a>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

// STEP 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF THE APPLICATION
export default SignUp;
