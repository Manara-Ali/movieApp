import "./Search.css";

// STEP 1. IMPORT REACT
import React from "react";

// STEP 2. ADDITIONAL IMPORTS GO HERE

// STEP 3. CREATE FUNCTION BASED COMPONENT
// const Search = () => {
//   return (
//     <div className="ui container" style={{ height: "50px" }}>
//       <div className="contact-page">
//         <form className="ui form">
//           <div className="field">
//             <label>User Input</label>
//             <input type="text" />
//           </div>
//           <button className="ui button">Search Movie</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// I NEEDED TO REFACTOR THIS SEARCH COMPONENT TO A CLASS COMPONENT SO I CAN ADD USER INTERACTION TO IT
class Search extends React.Component {
  // I need to make React the source of truth. this will turn my form from uncontrolled to controlled form
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
    };
  }

  // I need a function to keep up with whatever the user is entering inside the form
  handleInputChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  // I need a helper function to handle my form submission
  handleFormSubmission = (e) => {
    e.preventDefault();

    // I need to create a call back function that will notify my App.jsx every time a form gets submitted
    this.props.onSubmit(this.state.userInput);
    this.setState({
      userInput: "",
    });
  };

  render() {
    return (
      <div className="ui container" style={{ height: "50px" }}>
        <div className="contact-page">
          <form className="ui form" onSubmit={this.handleFormSubmission}>
            <div className="field">
              <label>Search Our Catalog</label>
              <input
                type="text"
                onChange={this.handleInputChange}
                value={this.state.userInput}
              />
            </div>
            <button className="ui button">Search Catalog</button>
          </form>
        </div>

        <div className="search-result">
          {/* CONSUME THE DATA YOU WISH TO SHOW TO THE USER HERE */}
          {/* {this.props.search.Title} */}
          <div key={this.props.search.imdbID} className="search-card">
            <h3>{this.props.search.Title}</h3>
            <img src={this.props.search.Poster} alt="" />
            <p>{this.props.search.Plot}</p>
          </div>
        </div>
      </div>
    );
  }
}

// STEP 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF THE APPLICATION
export default Search;
