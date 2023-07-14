import {Box,Typography,Stack,Avatar,Button,Rating,TextField,Grid} from '@mui/material'
import trending from './data'
import { useState , useEffect} from 'react';
import './Trendimgscroll.css'
function Movielist()
{
    const [data,setdata] = useState(trending.results)
    useEffect(()=>{},[])



    return(
        <Box>
            <Stack direction="row" gap={2}sx={{p:2}} style={{overflow:'scroll'}}>
            { 
                data.map((item)=>(
                    <Stack key={item.id}>
                        <img src={"https://image.tmdb.org/t/p/original" + item.poster_path} width={200} style={{borderRadius:'5px'}}/>
                        <Typography variant='p'>{item.title}</Typography>
                    </Stack>   
                ))
            }
            </Stack>
        </Box>  
    )
}

function TrendImgscroll(){
    let [data,setdata] = useState(trending.results)
    const randomImg = () =>{
        let randomIndex = null;
        setdata = randomIndex = Math.floor(Math.random() * data.length);
        console.log(setdata)
        return setdata;
    }
    const getrand = randomImg();
    return(
        <Box sx={{mt:7.5}}>
            <img id= "trendimg"src={"https://image.tmdb.org/t/p/original"+data[getrand].backdrop_path} width='100%'style={{aspectRatio: 10/4.5}}/>
            <Rating sx={{position: 'absolute',top: '60%',left: '3%',color: 'white'}}size='large' defaultValue={data[getrand].vote_average} precision={0.5} max={10} readOnly />
            <Typography variant='h3'
             sx={{
                position: 'absolute',
                top: '50%',
                left: '3%',
                color: 'white',
                fontFamily: 'cursive', 
                }}>
                {data[getrand].title}
            </Typography>
            <Button variant='contained'size='large'
            sx={{
                position: 'absolute',
                top: '70%',
                left: '3%',
            }}>Watch Triller</Button>
        </Box>
    );
    
}

export  {Movielist,TrendImgscroll};