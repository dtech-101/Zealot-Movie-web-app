import {Box,Typography,Stack,Avatar,Button,Rating,TextField,Grid} from '@mui/material'
import trending from './data'
import { useState , useEffect} from 'react';
function Discover(){
    const [data,setdata] = useState(trending.results)
    return(
        <Box>
            <Typography variant='h2'sx={{textAlign: 'center',color:'primary.main'}}>Discover</Typography>
            <TextField variant='outlined'fullWidth placeholder='Search For Movies,Tv-series,and People'></TextField>
            <Grid>
                {
                    <Upcoming/>
                }
            </Grid>
        </Box>
    )
}

function Upcoming(){
    const [data,setdata] = useState(trending.results)
    const getdata = [];
    let count = 1;
    for(count  = 1 ; count <= 10 ; count ++)
    {
        getdata.push(data[count])
    }
    console.log(getdata)
    return(
        <Box sx={{borderRight: 'solid 1px green'}} width={300}>
            <Typography>Up Coming</Typography>
            {
                getdata.map(item=>(
                    <Stack key={item.id} direction={'row'} alignItems={'center'} gap={2}sx={{p:1}}>
                         <img src={"https://image.tmdb.org/t/p/original"+item.poster_path} width='50px'/>
                        <Typography>{item.title}</Typography>
                    </Stack>
                ))
            }
        </Box>
    )
}
export { Discover}