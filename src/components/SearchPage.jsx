import { useLocation } from 'react-router-dom';
import {Box, Card,CardMedia, Stack, Typography,Rating, Button } from '@mui/material';
import {useState,useEffect} from 'react'
import {fetchDataFromApi} from '../components/Homepage/data2'

function SearchPage(){
const location = useLocation();
const { userId } = location.state;
const id = userId.id;
const img = "https://image.tmdb.org/t/p/original"+userId.backdrop_path;
    console.log(userId)
   return(
    <div>
        <Card sx={{maxHeight: 500}}>
        <CardMedia
            component="img"
            alt="green iguana"
            height= '550px'
            image={img}
            sx={{filter: 'brightness(40%)'}}/>
            <img src={"https://image.tmdb.org/t/p/original"+userId.poster_path} width={280} style={{
                position: 'relative',
                bottom: '500px',
                left: 50,
                borderRadius: 10,
            }}/>
            <Typography variant="h4" sx={{
                position: 'relative',
                bottom: '900px',
                ml: 43,
                color: 'white'
            }}>{userId.name}</Typography>
            <Typography variant='h6' sx={{
                position: 'relative',
                bottom: '890px',
                ml: 43,
                color: 'white',
            }}>{userId.overview}</Typography>
            <Stack direction={'row'} gap={2} sx={{
                position: 'relative',
                bottom: '880px',
                ml: 43,
                color: 'white' 
            }}>
                <Typography variant='h6'>Rating:<Rating name="read-only" value={1} max={1} readOnly /> {userId.vote_average}</Typography>
                <Typography variant='h6'sx={{mt:0.2}}>Date:{userId.first_air_date}</Typography>
            </Stack><br/>
        </Card>
        <Typography variant='h6' sx={{
            mt: 2,
        }}>Similar To {userId.name}</Typography>   
        <SimilarMovies id={id}/>
        <GetTriller id={id}/>
    </div>
   )
}
function SimilarMovies(props){
    const id = {props}
    const [data,setdata] = useState([])
    const newList = []
    let count = 0;
    console.log(id)
    useEffect(() => {
    getData();
    }, []);
    const getData = async () => {
    try{
    const response = await fetchDataFromApi(`https://api.themoviedb.org/3/tv/${props.id}/similar?language=en-US&page=1`);
    setdata(response.results);
    } catch (error) {
    console.log('error')
    }};
    console.log(data)
    for (const value of Object.values(data)) {
        newList.push(value);
        count++;
      
        if (count >= 5) {
          break;
        }
      }
    return(
        <Box sx={{mt: 2}}>
                <Stack direction={'row'} gap={2}  sx={{overflow:'scroll',p:2}}>
                    {
                data.map(item=>(
                <Stack>
                <img src={"https://image.tmdb.org/t/p/original"+item.poster_path} width={200} style={{borderRadius: '10px'}} alt={item.name}/>
                </Stack>
            ))
                } </Stack>
            
            
        </Box>
    )
}

const GetTriller = (props) => {
    const id = {props};
    const newList = []
    let count = 0;
    const [embedUrl, setembedUrl] = useState([]);
    useEffect(() => {
      fetchThrillerData();
    }, []);
    const fetchThrillerData = async () => {
      try {
        const response = await fetchDataFromApi(
          `https://api.themoviedb.org/3/tv/${props.id}/videos`
        );
        setembedUrl(response.results);
      } catch (error) {

      }
    };
    for (const value of Object.values(embedUrl)) {
        newList.push(value);
        count++;
      
        if (count >= 3) {
          break;
        }
      }
    return (
     <Box sx={{p:2}}>
        <Stack direction={'row'} gap={2} justifyContent={'center'}>
        {
            newList.map(item=>(
        <iframe
        width="500px"
        height="500px"
        src={`https://www.youtube.com/embed/${item.key}`}
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        id="thriller"
      ></iframe>
            ))
        }
        </Stack>
        
     </Box>
    );
  };
export default SearchPage;