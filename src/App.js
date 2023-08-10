import { BrowserRouter as Router, Route} from 'react-router-dom';
import { useState,useEffect } from 'react';
import './App.css'
import Main from './components/Homepage/main';
import MoviePage from './components/MoviePage/main';
import Tvseriespage from './components/TvSeriespage/main';
import SearchPage from './components/SearchPage';
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
        <Route path="/" component={Main} exact/>
        <Route exact path="/movies" component={MoviePage} />
        <Route exact path="/tv" component={Tvseriespage} />
        <Route path="/searchpage" component={SearchPage} />
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
