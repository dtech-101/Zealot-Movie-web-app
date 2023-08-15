import {Box,Typography,Stack,Tooltip,Rating, Button} from '@mui/material'
import { useState,useEffect} from 'react';
import {fetchDataFromApi} from './data2';
import './Recomend.css'
import { Link } from 'react-router-dom';
function Upcoming(){
const [data,setdata] = useState([])
const newList = []
let count = 0;
useEffect(() => {
getData();
}, []);
const getData = async () => {
try{
const response = await fetchDataFromApi('https://api.themoviedb.org/3/movie/upcoming');
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
return(
    <Box  sx={{p:2}}> 
    <Stack direction={'row'} justifyContent={'space-between'}> 
        <Typography variant='h5' sx={{ml:2,mb: 3,fontWeight: 'bold',color: 'secondry.main'}}>Upcoming Movies</Typography>
        <Link to='/movies'><Button>see more</Button></Link>
    </Stack>
    <Stack direction="row" gap={2} justifyContent={'center'}style={{overflow:'hidden'}} className='movielistscroll'>
    { newList.map((item)=>(
        <Stack className='contain'>
        <Tooltip title={item.overview}>
        <Link to={{ pathname: '/searchpage', state: { userId: item.id} }}> <img className='posterId' src={"https://image.tmdb.org/t/p/original" + item.poster_path}width={240} style={{
          borderRadius: '5px'
        }}/></Link>
        </Tooltip>
    </Stack>))}
    </Stack>
</Box>
)}
export default Upcoming;