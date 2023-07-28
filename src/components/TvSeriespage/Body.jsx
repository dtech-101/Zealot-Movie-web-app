import {Box,Typography,Stack,Tooltip,Button,Rating,Card,CardMedia} from '@mui/material'
import {fetchDataFromApi} from '../Homepage/data2';
import { useState,useEffect} from 'react';
import './Body.css'
import CloseIcon from '@mui/icons-material/Close';
function Body(){
const [data, setData] = useState([]);
const [datalist,setdatalist] = useState([])
useEffect(() => {
fetchData(`https://api.themoviedb.org/3/tv/top_rated`);
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
const AiringToday =()=>fetchData(`https://api.themoviedb.org/3/tv/airing_today`)
const OnTheAir =()=>fetchData(`https://api.themoviedb.org/3/tv/on_the_air`)
const Popular =()=>fetchData(`https://api.themoviedb.org/3/tv/popular`)
const Toprated =()=>fetchData(`https://api.themoviedb.org/3/tv/top_rated`)
const Discover =()=>fetchData(`https://api.themoviedb.org/3/discover/tv`)
const [isButtonClicked, setIsButtonClicked] = useState(false);
const img = "https://image.tmdb.org/t/p/original"+data.backdrop_path;
const handleClick = () => {setIsButtonClicked(true);};
const [isButtonClicked2, setIsButtonClicked2] = useState(false);
if (isButtonClicked) {return <GetTriller data={data}/>;}
const handleThrillerDisplay = () => setIsButtonClicked2(true);
if (isButtonClicked2) {alert("functionality is under development")}
return(
    <Box sx={{p: '1px',height:'80px',width: '100%',position: 'relative'}}>
        <Stack direction={'row'} gap={2}sx={{mt: 1,ml: 17,mb: 2}}>
            <Button variant='contained'sx={{p: 2,width: 200,color: 'secondry.main'}} onClick={AiringToday}>Airing Today</Button>
            <Button variant='contained'sx={{p: 2,width: 200,color: 'secondry.main'}} onClick={OnTheAir}>On The Air</Button>
            <Button variant='contained'sx={{p: 2,width: 200,color: 'secondry.main'}} onClick={Popular}>Popular</Button>
            <Button variant='contained'sx={{p: 2,width: 200,color: 'secondry.main'}} onClick={Toprated}>Toprated</Button>
            <Button variant='contained'sx={{p: 2,width: 200,color: 'secondry.main'}} onClick={Discover}>Discover</Button>
        </Stack>
        <Card sx={{maxHeight: 600}} id='card'>
            <CardMedia
            component="img"
            alt="green iguana"
            height= '600px'
            image={img}
            sx={{filter: 'brightness(40%)'}}/>
            <Typography sx={{position: 'relative',bottom: '220px',left: '3%',color: 'white',width:'90%'}}>{data.overview}</Typography>
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
                bottom: '250px',
                left: '3%',
                color: 'white'}}>Watch Triller</Button>
        </Card>
        <Stack direction={'row'}gap={2}sx={{overflow: 'scroll',mt: 3}} className='movielistscroll'  >
        { datalist.map((item)=>{
            const tool = {
                overview: item.overview
             }
            return(
            <Tooltip  title={Object.values(tool)}>
            <Stack key={item.id}>
            <img src={"https://image.tmdb.org/t/p/original" + item.poster_path} width={200} style={{borderRadius:'5px'}}onClick={handleThrillerDisplay}/>
            <Typography variant='p'textAlign='center' fontFamily={'cursive'}>{item.name}</Typography>
            </Stack></Tooltip>  
 )})}
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
const response = await fetchDataFromApi(data.id);
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