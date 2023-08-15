import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import MoviePage from "./components/MoviePage";
import SearchPage from "./components/SearchPage";
import Layout from "./layouts";
import TvSeriespage from "./components/TvSeriespage";
import HomePage from "./components/Homepage";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating data loading with useEffect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after a delay (simulating data loading)
    }, 2000); // Simulate a 2-second loading time
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Router>
          <Layout>
            <Route path="/" component={HomePage} exact />
            <Route exact path="/movies" component={MoviePage} />
            <Route exact path="/tv" component={TvSeriespage} />
            <Route path="/searchpage" component={SearchPage} />
          </Layout>
        </Router>
      )}
    </div>
  );
}

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <h2>Loading...</h2>
    </div>
  );
};

export default App;
