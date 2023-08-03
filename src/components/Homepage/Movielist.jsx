import { useState,useEffect} from 'react';
import {Box,Typography,Button,Rating,Card,CardMedia} from '@mui/material'
import { fetchDataFromApi} from './data2';
import './Billboard.css'
import CloseIcon from '@mui/icons-material/Close';
function TrendImgscroll(data,setData){
[data, setData] = useState([]);
useEffect(() => {
fetchData();
}, []);
const fetchData = async () => {
try{
const response = await fetchDataFromApi('https://api.themoviedb.org/3/trending/all/day')
const rand = Math.floor(Math.random() * response.results.length);
setData(response.results[rand]);
} catch (error) {
// Handle errors here
}};
const rating = data.vote_average;
console.log(typeof(rating))
let name = data.title;
if(name == undefined){name = data.name;}
else{name = data.title}
const img = "https://image.tmdb.org/t/p/original"+data.backdrop_path;
const [isButtonClicked, setIsButtonClicked] = useState(false);
const handleThrillerDisplay = () => setIsButtonClicked(true);
if (isButtonClicked) {return <GetTriller data={data}/>;}

    return(
        <Box>
            <Card sx={{maxHeight:'600px'}} id='card'>
             <CardMedia
                component="img"
                alt="green iguana"
                height= '600px'
                image={img}
                sx={{filter: 'brightness(40%)',
                
            }}
            />
            <Typography sx={{position: 'relative',bottom: '220px',left: '3%',color: 'white',width:'90%'}}>{data.overview}</Typography>
            <Typography variant='h3' className='name'
             sx={{
                position: 'relative',
                bottom: '370px',
                left: '3%',
                color: 'white',
                fontFamily: 'cursive', 
                }}>
                {name}
            </Typography> 
            <Button onClick={handleThrillerDisplay} variant='contained'size='large'
            sx={{
                position: 'relative',
                bottom: '250px',
                left: '3%',
                color: 'white'
            }}>Watch Triller</Button>
            </Card>
        </Box>
)}

const GetTriller = (props)=>{
const {data} = props;
const [isButtonClicked, setIsButtonClicked] = useState(false);
const [embedUrl,setembedUrl] = useState(`https://www.youtube.com/embed/${""}`)
useEffect(() => {
fetchThrillerData();
}, []);
const fetchThrillerData = async () => {
try{
const response = await fetchDataFromApi(`https://api.themoviedb.org/3/movie/${data.id}/videos`);
setembedUrl(`https://www.youtube.com/embed/${response.results[0].key}`)
} catch (error) {
// Handle errors here
}};
const handleClick = () => setIsButtonClicked(true);
if (isButtonClicked) {return <TrendImgscroll/>;}
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
)}

export  {TrendImgscroll,GetTriller};