import {Box,Typography,Stack,Button} from '@mui/material'
import { useState,useEffect} from 'react';
import {FetchTrends} from '../data2';
function Trending()
{ 
    const [data,setdata] = useState([])
    useEffect(() => {
        getData();
      }, []);
      const getData = async () => {
      try{
        const response = await FetchTrends("day");
        setdata(response.results);
        Todaytrends() 
      } catch (error) {
        // Handle errors here
      }};

      const getDataweek = async () => {
      try{
        const response = await FetchTrends("week");
        setdata(response.results);
        Weeklytrends() 
      } catch (error) {
        // Handle errors here
      }};

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
            { 
                data.map((item)=>(
                    <Stack key={item.id}>
                        <img src={"https://image.tmdb.org/t/p/original" + item.poster_path} width={200} style={{borderRadius:'5px'}}/>
                        <Typography variant='p'textAlign='center' fontFamily={'cursive'}>{item.title}</Typography>
                    </Stack>   
                ))
            }
            </Stack>
        </Box>  
    )
    
}

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
export default Trending;