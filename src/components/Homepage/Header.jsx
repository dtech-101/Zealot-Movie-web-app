import {Box,Typography,ButtonGroup,Button,AppBar,TextField,Stack} from '@mui/material'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
function Header()
{
  const [textFieldValue, setTextFieldValue] = useState('');

  const handleChange = (event) => {
    // Update the state with the new value from the text field
    setTextFieldValue(event.target.value);
  };
    return(
        <Box sx={{mb:7.5}}>
        <AppBar sx={{position: 'fixed'}}>
          <Stack flexDirection={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
          <Typography sx={{color: 'white',fontSize: '25px',ml: '14px'}}>Zealot</Typography>
        <ButtonGroup orientation='horizontal' sx={{ml: 50,gap:5}}>
          <Link to="/"><Button variant='text'color='secondry'>HOME</Button></Link>
          <Link to="/movies"><Button variant='text'color='secondry'>MOVIES</Button></Link>
          <Link to="/tv"><Button variant='text'color='secondry'>TV-SERIES</Button></Link>
          <a href='https://github.com/dtech-101/Zealot-Movie-web-app' target='blank'><Button variant='text'color='secondry'>PORTFOLIO</Button></a>
        </ButtonGroup>
          <TextField id="filled-basic" label="Search" variant="filled" sx={{width: '300px'}} onChange={handleChange}/>
          <Link to={{ pathname: '/searchpage', state: { userId: textFieldValue} }}><Button color='secondry'><SearchRoundedIcon/></Button></Link>
        </Stack>
        </AppBar>
      </Box>
    )
}
export default Header;