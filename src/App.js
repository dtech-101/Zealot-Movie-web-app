import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css'
import Main from './components/Homepage/main';
import MoviePage from './components/MoviePage/main';
import Tvseriespage from './components/TvSeriespage/main';
import SearchPage from './components/SearchPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Main} exact/>
        <Route exact path="/movies" component={MoviePage} />
        <Route exact path="/tv" component={Tvseriespage} />
        <Route path="/searchpage" component={SearchPage} />
      </Router>
    </div>
  );
}

export default App;
