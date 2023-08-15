import {
  Box,
  Typography,
  Stack,
  Tooltip,
  Button,
  Rating,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import { fetchDataFromApi } from "../Homepage/data2";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import CloseIcon from "@mui/icons-material/Close";
function MoviePage() {
  const [data, setData] = useState([]);
  const [datalist, setdatalist] = useState([]);
  const newList = [];
  let count = 0;
  useEffect(() => {
    fetchData('https://api.themoviedb.org/3/trending/movie/day');
  }, []);
  const fetchData = async (link) => {
    try {
      const response = await fetchDataFromApi(link);
      const rand = Math.floor(Math.random() * response.results.length);
      setData(response.results[rand]);
      setdatalist(response.results);
    } catch (error) {
      // Handle errors here
    }
  };
  for (const value of Object.values(datalist)) {
    newList.push(value);
    count++;

    if (count >= 5) {
      break;
    }
  }
  let name = data.title;
  if (name == undefined) {
    name = data.name;
  } else {
    name = data.title;
  }
  const NowPlaying = () =>
    fetchData(`https://api.themoviedb.org/3/movie/now_playing`);
  const Popular = () => fetchData(`https://api.themoviedb.org/3/movie/popular`);
  const Toprated = () =>
    fetchData(`https://api.themoviedb.org/3/movie/top_rated`);
  const Upcoming = () =>
    fetchData(`https://api.themoviedb.org/3/movie/upcoming`);
  const Discover = () =>
    fetchData(`https://api.themoviedb.org/3/discover/movie`);
  const img = "https://image.tmdb.org/t/p/original" + data.backdrop_path;
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isButtonClicked2, setIsButtonClicked2] = useState(false);
  const handleClick = () => {
    setIsButtonClicked(true);
  };
  if (isButtonClicked) {
    return <GetTriller data={data} />;
  }
  const handleThrillerDisplay = () => setIsButtonClicked2(true);
  if (isButtonClicked2) {
    alert("functionality is under development");
  }
  return (
    <Stack direction={"row"}>
      <Stack
        direction={"column"}
        gap={2}
        sx={{
          mt: -0.5,
          p: 2,
          pt: 5,
          backgroundColor: "#533E2D",
          position: "fixed",
          zIndex: 1,
          height: "100%",
        }}
      >
        <Button
          variant="text"
          sx={{ width: "100%", fontSize: "15px", color: "secondry.main" }}
          onClick={Popular}
        >
          Popular
        </Button>
        <Button
          variant="text"
          sx={{ width: "100%", fontSize: "15px", color: "secondry.main" }}
          onClick={Toprated}
        >
          Top Rated
        </Button>
        <Button
          variant="text"
          sx={{ width: "100%", fontSize: "15px", color: "secondry.main" }}
          onClick={Upcoming}
        >
          Upcoming
        </Button>
        <Button
          variant="text"
          sx={{ width: "100%", fontSize: "15px", color: "secondry.main" }}
          onClick={NowPlaying}
        >
          Now Playing
        </Button>
        <Button
          variant="text"
          sx={{ width: "100%", fontSize: "15px", color: "secondry.main" }}
          onClick={Discover}
        >
          Discover
        </Button>
      </Stack>
      <Stack sx={{ mt: -0.5, ml: 19, width: "100%" }} className="moviepage">
        <Card sx={{ maxHeight: 600 }} id="card">
          <CardMedia
            component="img"
            alt="green iguana"
            height="600px"
            image={img}
            sx={{ filter: "brightness(40%)" }}
          />
          <Typography
            sx={{
              position: "relative",
              bottom: "220px",
              left: "3%",
              color: "white",
              width: "90%",
            }}
          >
            {data.overview}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              position: "relative",
              bottom: "370px",
              left: "3%",
              color: "white",
              fontFamily: "cursive",
            }}
          >
            {name}
          </Typography>
          <Button
            onClick={handleClick}
            variant="contained"
            size="large"
            sx={{
              position: "relative",
              bottom: "250px",
              left: "3%",
              color: "white",
            }}
          >
            Watch Triller
          </Button>
        </Card>
        <Grid sx={{ mt: 2, ml: 6.5 }} className="movielistscroll">
          {datalist.map((item) => (
            <Stack className="contain">
              <Tooltip title={item.overview}>
                <Link to={{ pathname: "/searchpage", state: { userId: item } }}>
                  {" "}
                  <img
                    className="posterId"
                    src={
                      "https://image.tmdb.org/t/p/original" + item.poster_path
                    }
                    width={260}
                    style={{
                      borderRadius: "5px",
                    }}
                  />
                </Link>
              </Tooltip>
            </Stack>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}

const GetTriller = (props) => {
  const { data } = props;
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [embedUrl, setembedUrl] = useState(
    `https://www.youtube.com/embed/${""}`
  );
  useEffect(() => {
    fetchThrillerData();
  }, []);
  const fetchThrillerData = async () => {
    try {
      const response = await fetchDataFromApi(
        `https://api.themoviedb.org/3/movie/${data.id}/videos`
      );
      setembedUrl(`https://www.youtube.com/embed/${response.results[0].key}`);
    } catch (error) {
      // Handle errors here
    }
  };
  const handleClick = () => setIsButtonClicked(true);
  if (isButtonClicked) {
    return <MoviePage />;
  }
  return (
    <div>
      <Box>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{ color: "#ffffff", position: "relative", top: 50, left: "95%" }}
        >
          <CloseIcon />
        </Button>
        <iframe
          width="100%"
          height="600px"
          src={embedUrl}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          id="thriller"
        ></iframe>
      </Box>
    </div>
  );
};
export default MoviePage;
