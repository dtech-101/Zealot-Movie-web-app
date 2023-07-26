import {Box,Typography,Stack,Avatar,Button,Rating,Card,CardMedia} from '@mui/material'
import { fetchDataFromApi,GetTrillerData } from './data2';
import { useState,useEffect} from 'react';
import './Trending/Trending.css'
import CloseIcon from '@mui/icons-material/Close';

function TrendImgscroll(){
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
  try{
    const response = await fetchDataFromApi();
    const rand = Math.floor(Math.random() * response.results.length);
    setData(response.results[rand]);
  } catch (error) {
    // Handle errors here
  }};
  const rating = data.vote_average;
  console.log(typeof(rating))
    let name = data.title;
    if(name == undefined)
    {
        name = data.name;
    }
    else{
      name = data.title
    }

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const img = "https://image.tmdb.org/t/p/original"+data.backdrop_path;
    


  
    const handleClick = () => {
        setIsButtonClicked(true);
      };

      if (isButtonClicked) {
        return <GetTriller data={data}/>;
      }
    return(
        <Box sx={{mt:7.5}}>
            <Card sx={{maxHeight: 600}} id='card'>
             <CardMedia
                component="img"
                alt="green iguana"
                height= '600px'
                image={img}
                sx={{filter: 'brightness(40%)'}}
            />
            <Rating sx={{position: 'relative',bottom: '260px',left: '3%',color: 'white'}}size='large' defaultValue = {data.vote_average} precision={0.5} max={10} readOnly />
            <Typography variant='h3'
             sx={{
                position: 'relative',
                bottom: '370px',
                left: '3%',
                color: 'white',
                fontFamily: 'cursive', 
                }}>
                {name}
            </Typography> 
            <Button onClick={handleClick} variant='contained'size='large'
            sx={{
                position: 'relative',
                bottom: '290px',
                left: '3%',
                color: 'white'
            }}>Watch Triller</Button>
            </Card>
        </Box>
    );
    
}
const GetTriller = (props)=>{
  const {data} = props;
      const [isButtonClicked, setIsButtonClicked] = useState(false);
      const [embedUrl,setembedUrl] = useState(`https://www.youtube.com/embed/${""}`)


      useEffect(() => {
        fetchThrillerData();
      }, []);
      const fetchThrillerData = async () => {
      try{
        const response = await GetTrillerData(data.id);
        setembedUrl(`https://www.youtube.com/embed/${response.results[0].key}`)
       
      } catch (error) {
        // Handle errors here
      }};




    const handleClick = () => {
        setIsButtonClicked(true);
      };

      if (isButtonClicked) {
        return <TrendImgscroll/>;
      }

    return(
        <Box>
        <Button variant="contained" onClick={handleClick} sx={{color: '#ffffff',position: 'relative',top: 50,left: '95%'}}><CloseIcon/></Button>
    <iframe
        width="100%"
        height="600px"
        src={embedUrl}
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        id='thriller'
      ></iframe>
      </Box>
    )
}


export  {TrendImgscroll};