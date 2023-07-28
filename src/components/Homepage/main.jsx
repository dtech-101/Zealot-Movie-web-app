import Header from '../Homepage/Header';
import {TrendImgscroll} from '../Homepage/Movielist';
import Footer from '../Homepage/Footer';
import Trending from './Trending';
import Recomend from '../Homepage/Recomend';
function Main() {
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

export default Main;