import "./App.css";

// STEP 1. IMPORT REACT
import React from "react";

// STEP 2. ADDITIONAL IMPORTS GO HERE
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Search from "./Search";
import Login from "./Login";
import SignUp from "./SignUp";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// STEP 3. CREATE A CLASS BASED COMPONENT TO MANAGE OUR OTHER COMPONENTS AND KEEP TRACK OF MY DATA

// There was no endpoint to collect a list of movies to show the user on our home page therefore I created my own list that I will update
const homeMovieData = [
  "john wick: chapter 3",
  "greenland",
  "the last jedi",
  "godzilla vs. kong",
  "fast & furious",
  "justice league",
  "venom",
  "bad boys for life",
  "blade runner 2049",
  "the invisible man",
  "avengers: endgame",
  "captain america: civil war",
];

class App extends React.Component {
  // Inherit from the react class
  constructor(props) {
    super(props);

    // Create a new state that will keep track of my movies
    this.state = {
      movieList: [],
      movieSeach: "",
    };
  }

  //   Define a function that is responsible of making the API request for me
  // This function takes in an array of movies
  getData = async (movieArr) => {
    // Send the API request
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=9774dea6&t=${movieArr}`
    );

    // Parse the response into json format
    const data = await response.json();

    // Push the data (single movie title) into the movie array
    this.state.movieList.push(data);

    // Re-render the data using this.setState. this will allow us to reload our page a second time each time the function is called
    this.setState({ movieList: this.state.movieList });
  };

  componentDidMount() {
    // Component did mount is supposed to run only once whenever the application loads
    // However, I need the funtion to be called multiple times in order to populate my movie data, therefore I chose to use a for loop to complete this task
    for (let i = 0; i < homeMovieData.length; i++) {
      // The movie is called for each element of the homeMovie array and because of line 59. the component is re-rendered after each call and the state updated
      this.getData(homeMovieData[i]);
    }
  }

  // I need to create a call back function that will notify my App.jsx every time a form gets submitted
  onFormSubmit = async (inputItem) => {
    // Retrieve the user search term and use it as an API call parameter
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=9774dea6&t=${inputItem}`
    );

    // Parse the response in .json() format
    const data = await response.json();

    // Set that data as our new state data to keep track of (this is an entire object)
    this.setState({
      movieSeach: data,
    });
    console.log(this.state.movieSeach);
  };

  render() {
    return (
      // Using React Browser Router to set up the routes for my application
      <Router>
        <div className="wrapper">
          {/* Here I want the Navbar to always show */}
          <NavBar />

          {/* Here I use the Switch tag in case there is another keyword that come after the first route, for example in the case of a blog post I could have /blog/post-1/ (So our first route is the /blog but then the user might click on a specific blog title to follow that particular path */}
          <Switch>
            {/* Here I am using the route syntax that will allow me to pass props to my routes */}
            <Route
              exact
              path="/"
              render={() => <Home movies={this.state.movieList} />}
            />
            <Route path="/about" render={() => <About />} />
            <Route
              path="/search"
              render={() => (
                <Search
                  onSubmit={this.onFormSubmit}
                  //   Pass that entire search term object result back to the search component to be displayed
                  search={this.state.movieSeach}
                />
              )}
            />
            <Route path="/login" render={() => <Login />} />
            <Route path="/sign-up" render={() => <SignUp />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

// STEP 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default App;
