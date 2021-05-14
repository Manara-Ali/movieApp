import "./Home.css";

// STEP 1. IMPORT REACT
import React from "react";

// STEP 2. ADDITIONAL IMPORTS GO HERE

// STEP 3. CREATE A FUNCTION COMPONENT
// Here is my parent component for each instance of a Home component
const Home = (props) => {
  // I create a new propsList array that will store all our instance of a single movie
  const propsList = props.movies.map((element) => {
    // Don't forget the return statement
    return (
      <div key={element.imdbID} className="movie-card">
        <h3>{element.Title}</h3>
        <img
          src={element.Poster}
          alt="poster"
          style={{ width: "250px", height: "350px" }}
        />
        <p>
          {element.Plot.slice(0, 100)}...
          <br />
          <button
            className="ui button"
            onClick={() => console.log("I was clicked")}
          >
            Read More
          </button>
        </p>
      </div>
    );
  });

  // Return an instance of each movie on the home page
  return <div className="landing-page">{propsList}</div>;
};

// const homeMovieData = [
//   "john wick",
//   "pikachu",
//   "star wars",
//   "godzilla",
//   "mulan",
//   "justice league",
//   "venom",
//   "mortal kombat",
//   "blade runner",
//   "the invisible man",
//   "avengers: endgame",
//   "captain america: civil war",
// ];

// class Home extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       movieList: [],
//     };
//   }

//   getData = async (homeMovieData) => {
//     const response = await fetch(
//       `http://www.omdbapi.com/?i=tt3896198&apikey=9774dea6&t=${homeMovieData}`
//     );
//     const data = await response.json();
//     this.state.movieList.push(data);
//     this.setState({ movieList: this.state.movieList });
//   };

//   componentDidMount() {
//     for (let i = 0; i < homeMovieData.length; i++) {
//       this.getData(homeMovieData[i]);
//     }
//     console.log(this.state.movieList.length);
//   }

//   render() {
//     return (
//       <div>
//         {this.state.movieList.map((element) => {
//           return (
//             <div key={element.imdbID} className="movie-card">
//               <h3>{element.Title}</h3>
//               <img
//                 src={element.Poster}
//                 alt="poster"
//                 style={{ width: "250px", height: "350px" }}
//               />
//               <p>{element.Plot}</p>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// STEP 4. IMPORT THE COMPONENT TO BE USED IN OTHER PARTS OF THE APPLICATION
export default Home;
