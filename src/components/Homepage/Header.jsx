import {Box,Typography,ButtonGroup,Button,AppBar,TextField,Stack, Alert} from '@mui/material'
import { Link } from 'react-router-dom';

function Header()
{
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert("functionality is under development")
    }
  };
    return(
        <Box sx={{mb:7.5}}>
        <AppBar sx={{position: 'fixed'}}>
          <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography sx={{color: 'white',fontSize: '25px',ml: '14px'}}>Zealot</Typography>
        <ButtonGroup orientation='horizontal' sx={{ml: 10,gap:5}}>
          <Link to="/"><Button variant='text'color='secondry'>HOME</Button></Link>
          <Link to="/movies"><Button variant='text'color='secondry'>MOVIES</Button></Link>
          <Link to="/tv"><Button variant='text'color='secondry'>TV-SERIES</Button></Link>
          <a href='https://github.com/dtech-101/Zealot-Movie-web-app' target='blank'><Button variant='text'color='secondry'>PORTFOLIO</Button></a>
        </ButtonGroup>
          <TextField id="filled-basic" label="Search" variant="filled" sx={{width: '300px'}} onKeyDown={handleKeyDown}/>
        </Stack>
        </AppBar>
      </Box>
    )
}
export default Header;