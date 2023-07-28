import {Box,Typography,Stack,Tooltip} from '@mui/material'
import { useState,useEffect} from 'react';
import {fetchDataFromApi} from './data2';
import './Recomend.css'
function Recomend(){
const [data,setdata] = useState([])
useEffect(() => {
getData();
}, []);
const getData = async () => {
try{
const response = await fetchDataFromApi('https://api.themoviedb.org/3/movie/top_rated');
setdata(response.results);
} catch (error) {
 // Handle errors here
}};
return(
    <Box>
        <Typography variant='h5' sx={{ml: 2,color: 'primary.main'}}>Recomend</Typography>
        <Stack direction="row" gap={2}sx={{p:2}} style={{overflow:'scroll'}} className='movielistscroll'>
        {   data.map((item)=>{
            const tool = {
                overview: item.overview
              }
            return(
                <Tooltip  title={Object.values(tool)}>
            <Stack key={item.id}>
            <img src={"https://image.tmdb.org/t/p/original" + item.poster_path} width={200} style={{borderRadius:'5px'}}/>
            <Typography variant='p'textAlign='center' fontFamily={'cursive'}>{item.title}</Typography>
            </Stack></Tooltip>  
)})}
            </Stack>
    </Box>
)}
export default Recomend;