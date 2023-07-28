import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Homepage/main';
import MoviePage from './components/MoviePage/main';
import Tvseriespage from './components/TvSeriespage/main';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/movies" component={MoviePage} />
        <Route exact path="/tv" component={Tvseriespage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
