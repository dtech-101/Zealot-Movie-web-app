import {Box,Typography,Stack,Rating,Button,Tooltip} from '@mui/material'
import { useState,useEffect} from 'react';
import {fetchDataFromApi} from './data2';
import { Link } from 'react-router-dom';
import './Trending.css'
function Trending(){ 
const [data,setdata] = useState([])
const newList = []
let count = 0;
useEffect(() => {
getData();
}, []);
const getData = async () => {
try{
const response = await fetchDataFromApi('https://api.themoviedb.org/3/trending/tv/day');
setdata(response.results);
} catch (error) {
// Handle errors here
}};
const getDataweek = async () => {
try{
const response = await fetchDataFromApi('https://api.themoviedb.org/3/trending/tv/week');
setdata(response.results);
} catch (error) {
// Handle errors here
}};


for (const value of Object.values(data)) {
  newList.push(value);
  count++;

  if (count >= 5) {
    break;
  }
}

console.log("newadata"+ newList)
return(
<Box  sx={{mt: 1,p:5}}>
<Stack direction={'row'} justifyContent={'space-between'}> 
        <Typography variant='h5' sx={{mb: 3,fontWeight: 'bold',color: 'secondry.main'}}>TRending series</Typography>
        <Link to='/tv'><Button>see more</Button></Link>
    </Stack>
    <Stack direction="row" gap={2} justifyContent={'center'}style={{overflow:'hidden'}} className='movielistscroll'>
    { newList.map((item)=>(
        <Stack className='contain'>
        <Tooltip title={item.overview}>
        <Link to={{ pathname: '/searchpage', state: { userId: item.id} }}> <img className='posterId' src={"https://image.tmdb.org/t/p/original" + item.poster_path}width={240} style={{
          borderRadius: '5px'
        }}/></Link>
        </Tooltip>
        <Typography sx={{
          position: 'relative',
          bottom: '88%',
          left: '71%',
          backgroundColor: '#faaf00',
          width: '70px',
        }}><Rating name="read-only" value={1} max={1}readOnly sx={{color: 'black'}} />{item.vote_average}</Typography>
    </Stack>))}
    </Stack>
</Box>
)}
  
export default Trending;