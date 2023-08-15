import { TrendImgscroll } from "./Movielist";
import Trending from "./Trending";
import Recomend from "./Recomend";
import Upcoming from "./Upcoming";
import Popular from "./Popular";
import BreakingPoint from "./BreakingPoint";

function HomePage() {
  return (
    <div className="App">
      <TrendImgscroll />
      <BreakingPoint />
      <Trending />
      <Recomend />
      <Upcoming />
      <Popular />
    </div>
  );
}
export default HomePage;
