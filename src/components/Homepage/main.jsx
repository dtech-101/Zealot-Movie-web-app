import Header from '../Homepage/Header';
import {TrendImgscroll} from '../Homepage/Movielist';
import Footer from '../Homepage/Footer';
import Trending from './Trending';
import Recomend from '../Homepage/Recomend';
import Upcoming from './Upcoming';
import Popular from './Popular';
import BreakingPoint from './BreakingPoint';
function Main() {
  return (
    <div className="App">
      <Header/>
      <TrendImgscroll/>
      <BreakingPoint/>
      <Trending/>
      <Recomend/>
      <Upcoming/>
      <Popular/>
      <Footer/>
    </div>
  );
}

export default Main;