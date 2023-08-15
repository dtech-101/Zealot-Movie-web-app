import {Box,Typography,ButtonGroup,Button,AppBar,TextField,Stack} from '@mui/material'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MenuIcon from '@mui/icons-material/Menu';
import {BsSunFill,BsFillMoonStarsFill} from 'react-icons/bs'
import { useMemo } from 'react';
import './Header.css'
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
  const funheadernav =()=>{
    const headernav = document.getElementById('headernav')
    headernav.classList.toggle("toggle");
  }
  const linkstyle = {
    color: 'white',
    textDecoration: 'none'
  }
    return(
        <Box sx={{mb:7.5}}>
        <AppBar sx={{position: 'fixed'}}>
          <Stack flexDirection={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
          <Typography sx={{color: 'white',fontSize: '25px',ml: '14px'}} className='sitenam'>Zealot</Typography>
        <ButtonGroup className='headerGroupBtn' orientation='horizontal' sx={{ml:{sm: 0},gap:5}}>
          <Link to="/"><Button variant='text'color='secondry'>HOME</Button></Link>
          <Link to="/movies"><Button variant='text'color='secondry'>MOVIES</Button></Link>
          <Link to="/tv"><Button variant='text'color='secondry'>TV-SERIES</Button></Link>
          <a href='https://github.com/dtech-101/Zealot-Movie-web-app' target='blank'><Button variant='text'color='secondry'>About Me</Button></a>
        </ButtonGroup>
        <Button variant='text' color='secondry' sx={{ml:5,fontSize: 30}} onClick={changeIcon}>{iconMemo}</Button>
          <TextField id="filled-basic" label="Search" className="textfield"variant="filled" sx={{
            width: {sm: 600,md: 400},
            ml: {sm:2},
            position: {sm:'relative'},
            left:{sm: 20}
            }} onChange={handleChange}/>
          <Link to={{ pathname: '/searchpage', state: { userId: textFieldValue}}}><Button color='secondry' sx={{
            position:{sm: 'relative'},
            left:{sm: 10}
          }}><SearchRoundedIcon/></Button></Link>
            <Button sx={{color: 'secondry.main'}} id="bugermenu"onClick={funheadernav}><MenuIcon/></Button>
          <ul id='headernav'>          
          <li><Button variant='text'><Link to="/" style={linkstyle} >HOME</Link></Button></li>
          <li><Button variant='text'><Link to="/movies" style={linkstyle}>MOVIES</Link></Button></li>
          <li><Button variant='text'><Link to="/tv" style={linkstyle}>TV-SERIES</Link></Button></li>
          <a href='https://github.com/dtech-101/Zealot-Movie-web-app' target='blank'><Button variant='text'color='secondry'>About Me</Button></a>
          </ul>
        </Stack>
        </AppBar>
      </Box>
    )
}
export default Header;