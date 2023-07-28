import {Box,Typography,Stack,Avatar,Button,Rating,Card,CardMedia} from '@mui/material'
import {fetchDataFromApi} from '../Homepage/data2';
import { useState,useEffect} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Body(){
const [data, setData] = useState([]);
const [datalist,setdatalist] = useState([])
useEffect(() => {
fetchData(`https://api.themoviedb.org/3/movie/now_playing`);
}, []);
const fetchData = async (link) => {
try{
const response = await fetchDataFromApi(link);
const rand = Math.floor(Math.random() * response.results.length);
setData(response.results[rand]);
setdatalist(response.results)
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
const NowPlaying =()=>fetchData(`https://api.themoviedb.org/3/movie/now_playing`)
const Popular =()=>fetchData(`https://api.themoviedb.org/3/movie/popular`)
const Toprated =()=>fetchData(`https://api.themoviedb.org/3/movie/top_rated`)
const Upcoming =()=>fetchData(`https://api.themoviedb.org/3/movie/upcoming`)
const Discover =()=>fetchData(`https://api.themoviedb.org/3/discover/movie`)
const [isButtonClicked, setIsButtonClicked] = useState(false);
const img = "https://image.tmdb.org/t/p/original"+data.backdrop_path;
const handleClick = () => {setIsButtonClicked(true);};
if (isButtonClicked) {return <GetTriller data={data}/>;}
return(
    <Box sx={{p: '1px',height:'80px',width: '100%',position: 'relative'}}>
        <Stack direction={'row'} gap={2}sx={{mt: 1,ml: 25,mb: 2}}>
            <Button variant='contained'sx={{p: 2,width: 200,color: 'secondry.main'}} onClick={NowPlaying}>Now Playing</Button>
            <Button variant='contained'sx={{p: 2,width: 200,color: 'secondry.main'}} onClick={Popular}>Popular</Button>
            <Button variant='contained'sx={{p: 2,width: 200,color: 'secondry.main'}} onClick={Toprated}>Top Rated</Button>
            <Button variant='contained'sx={{p: 2,width: 200,color: 'secondry.main'}} onClick={Upcoming}>Upcoming</Button>
            <Button variant='contained'sx={{p: 2,width: 200,color: 'secondry.main'}} onClick={Discover}>Discover</Button>
        </Stack>
        <Card sx={{maxHeight: 600}} id='card'>
            <CardMedia
            component="img"
            alt="green iguana"
            height= '600px'
            image={img}
            sx={{filter: 'brightness(40%)'}}/>
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
                color: 'white'}}>Watch Triller</Button>
        </Card>
        <Stack direction={'row'}gap={2}sx={{overflow: 'scroll',mt: 3}}>
            {
                datalist.map(item=>(
                <Stack> 
                    <img src={"https://image.tmdb.org/t/p/original"+item.poster_path} width={200}/>
                    <Typography sx={{fontSize: 17,textAlign: 'center'}}>{item.title}</Typography>
                </Stack>
                ))}
        </Stack>
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
const response = await fetchDataFromApi(`https://api.themoviedb.org/3/movie/${data.id}/videos`)
setembedUrl(`https://www.youtube.com/embed/${response.results[0].key}`)
} catch (error) {
// Handle errors here
}};
const handleClick = () => setIsButtonClicked(true);;
if (isButtonClicked) {return <Body/>;}
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
        id='thriller'></iframe>
    </Box>
)}  
export default Body