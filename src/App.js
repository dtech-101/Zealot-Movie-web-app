import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import {Movielist, TrendImgscroll} from './components/Homepage/Movielist';
import { Discover } from './components/Homepage/Discover';
function App() {
  return (
    <div className="App">
      <Homepage/>
      <TrendImgscroll/>
      <Movielist/>
      <Discover/>
    </div>
  );
}

export default App;
