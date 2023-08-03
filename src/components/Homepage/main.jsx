import Header from '../Homepage/Header';
import {TrendImgscroll} from '../Homepage/Movielist';
import Footer from '../Homepage/Footer';
import Trending from './Trending';
import Recomend from '../Homepage/Recomend';
import Upcoming from './Upcoming';
function Main() {
  return (
    <div className="App">
      <Header/>
      <TrendImgscroll/>
      <Trending/>
      <Recomend/>
      <Upcoming/>
      <Footer/>
    </div>
  );
}

export default Main;