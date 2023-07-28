import {Box,Typography,Stack,Button,Tooltip} from '@mui/material'
import { useState,useEffect} from 'react';
import {fetchDataFromApi} from './data2';
import CloseIcon from '@mui/icons-material/Close';
function Trending(){ 
const [data,setdata] = useState([])
useEffect(() => {
getData();
}, []);
const getData = async () => {
try{
const response = await fetchDataFromApi('https://api.themoviedb.org/3/trending/movie/day');
setdata(response.results);
Todaytrends() 
} catch (error) {
// Handle errors here
}};
const getDataweek = async () => {
try{
const response = await fetchDataFromApi('https://api.themoviedb.org/3/trending/movie/week');
setdata(response.results);
Weeklytrends() 
} catch (error) {
// Handle errors here
}};
const [isButtonClicked, setIsButtonClicked] = useState(false);
const handleThrillerDisplay = () => setIsButtonClicked(true);
if (isButtonClicked) {alert("functionality is under development")}
return(
<Box>
  <Stack direction={'row'} sx={{p:3}}gap={2}>
    <Typography variant='h5' sx={{ml: 2,color: 'primary.main'}}>Trending</Typography>
    <div className='container'>
      <Button id="button1"variant='text' onClick={getData}>Today</Button>
      <Button id="button2"variant='text' onClick={getDataweek}>weekly</Button>
    </div>
    </Stack>    
    <Stack direction="row" gap={2}sx={{p:2}} style={{overflow:'scroll'}} className='movielistscroll'>
    { data.map((item)=>{
        const tool = {
          overview: item.overview
        }
      return(
      <Stack key={item.id}>
      <Tooltip  title={Object.values(tool)}>
        <img src={"https://image.tmdb.org/t/p/original" + item.poster_path} width={200} style={{borderRadius:'5px'}} onClick={handleThrillerDisplay}/>
        <Typography variant='p'textAlign='center' fontFamily={'cursive'}>{item.title}</Typography>
      </Tooltip>
    </Stack>)})}
  </Stack>
</Box>)}

function Todaytrends(){
    const trendingBtn = document.getElementById('button1')
    const recondationBtn = document.getElementById('button2')
    trendingBtn.style.background= '#F57C51';
    trendingBtn.style.color = '#ffffff';
    recondationBtn.style.background = 'transparent';
    recondationBtn.style.color = '#F57C51';
    trendingBtn.disabled = true;
    recondationBtn.disabled = false;
    console.log('1')
return 0
}
const Weeklytrends = () =>{
    const trendingBtn = document.getElementById('button1')
    const recondationBtn = document.getElementById('button2')
    recondationBtn.style.background= '#F57C51';
    recondationBtn.style.color = '#ffffff';
    trendingBtn.style.background = 'transparent';
    trendingBtn.style.color = '#F57C51';
    trendingBtn.disabled = false;
    recondationBtn.disabled = true; 
    console.log("2")
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
  const response = await fetchDataFromApi(`https://api.themoviedb.org/3/movie/${data.id}/videos`);
  setembedUrl(`https://www.youtube.com/embed/${response.results[0].key}`)
  } catch (error) {
  // Handle errors here
  }};
  const handleClick = () => setIsButtonClicked(true);
  if (isButtonClicked) {return <Trending/>;}
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
  
export default Trending;