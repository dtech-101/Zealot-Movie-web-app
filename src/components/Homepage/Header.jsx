import {Box,Typography,ButtonGroup,Button,AppBar,TextField,Stack} from '@mui/material'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {BsSunFill,BsFillMoonStarsFill} from 'react-icons/bs'
import { useMemo } from 'react';
function Header()
{
  const [textFieldValue, setTextFieldValue] = useState('');
  const sunicon = <BsSunFill/>
  const moonicon = <BsFillMoonStarsFill/>
  const [icon,seticon] = useState('sun')
  const handleChange = (event) => {
    // Update the state with the new value from the text field
    setTextFieldValue(event.target.value);
  };
  const changeIcon = ()=>{
    if(icon === 'sun'){
        seticon('moon')
        document.body.style.backgroundColor = "black";
    }
    else{
      seticon('sun')
      document.body.style.backgroundColor = "white";
    }
  }
  const iconMemo = useMemo(() => icon == 'sun' ? sunicon : moonicon,
  [icon])
    return(
        <Box sx={{mb:7.5}}>
        <AppBar sx={{position: 'fixed'}}>
          <Stack flexDirection={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
          <Typography sx={{color: 'white',fontSize: '25px',ml: '14px'}}>Zealot</Typography>
        <ButtonGroup orientation='horizontal' sx={{ml: 40,gap:5}}>
          <Link to="/"><Button variant='text'color='secondry'>HOME</Button></Link>
          <Link to="/movies"><Button variant='text'color='secondry'>MOVIES</Button></Link>
          <Link to="/tv"><Button variant='text'color='secondry'>TV-SERIES</Button></Link>
          <a href='https://github.com/dtech-101/Zealot-Movie-web-app' target='blank'><Button variant='text'color='secondry'>About Me</Button></a>
          <Button variant='text' color='secondry' sx={{fontSize: 30}} onClick={changeIcon}>{iconMemo}</Button>
        </ButtonGroup>
          <TextField id="filled-basic" label="Search" variant="filled" sx={{width: '300px'}} onChange={handleChange}/>
          <Link to={{ pathname: '/searchpage', state: { userId: textFieldValue} }}><Button color='secondry'><SearchRoundedIcon/></Button></Link>
        </Stack>
        </AppBar>
      </Box>
    )
}
export default Header;