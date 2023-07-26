import logo from './logo.svg';
import './App.css';
import Header from './components/Homepage/Header';
import {TrendImgscroll} from './components/Homepage/Movielist';
import Footer from './components/Homepage/Footer';
import Trending from './components/Homepage/Trending/Trending';
import Recomend from './components/Homepage/Recomend';
function App() {
  return (
    <div className="App">
      <Header/>
      <TrendImgscroll/>
      <Trending/>
      <Recomend/>
      <Footer/>
    </div>
  );
}

export default App;
