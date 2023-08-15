import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
} from "@mui/material";
import './MovieList.css'
import { fetchDataFromApi } from "./data2";
import CloseIcon from "@mui/icons-material/Close";

function TrendImgscroll(data, setData) {
  [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetchDataFromApi(
        "https://api.themoviedb.org/3/trending/all/day"
      );
      const rand = Math.floor(Math.random() * response.results.length);
      setData(response.results[rand]);
    } catch (error) {
      // Handle errors here
    }
  };
  const rating = data.vote_average;
  console.log(typeof rating);
  let name = data.title;
  if (name == undefined) {
    name = data.name;
  } else {
    name = data.title;
  }
  const img = "https://image.tmdb.org/t/p/original" + data.backdrop_path;
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleThrillerDisplay = () => setIsButtonClicked(true);
  if (isButtonClicked) {
    return <GetTriller data={data} />;
  }

  return (
    <Box>
      <Card sx={{ maxHeight: {sm:0,md:600} }} id="card">
        <CardMedia
          component="img"
          alt="green iguana"
          height="600px"
          image={img}
          sx={{ filter: "brightness(40%)"}}
        />
        <Typography variant="h3" className="name"sx={{
          position: 'relative',
          bottom: 300,
          left: '3%',
          color: 'secondry.main'
        }}>{name}</Typography>
        <ButtonGroup className="buttongroup" sx={{
            position: "relative",
            bottom: "250px",
            left: "3%",
            color: "white",
            gap: 2,
          }}>
        <Button onClick={handleThrillerDisplay}variant="contained"size="large">Watch Triller</Button>
        <Button className="watchthriller"variant="contained"size="large">Preview</Button>
        </ButtonGroup>
      </Card>
    </Box>
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
    return <TrendImgscroll />;
  }
  return (
    <Box>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          background: "primary.main",
          position: "relative",
          top: 50,
          left: "95%",
        }}
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
  );
};

export { TrendImgscroll, GetTriller };
