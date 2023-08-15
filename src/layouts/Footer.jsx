import {Box,Stack,ButtonGroup,Button,Typography} from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import './Footer.css'
function Footer()
{
return(
    <Box sx={{backgroundColor: 'primary.main',mt: 1}}>
         <footer class="footer">
    <div>
      <p>&copy; 2023 Zealot. All rights reserved.</p>
    </div>
    <div>
    <Link to="/"><Button variant='text'color='secondry'>HOME</Button></Link>
    <Link to="/movies"><Button variant='text'color='secondry'>MOVIES</Button></Link>
    <Link to="/tv"><Button variant='text'color='secondry'>TV-SERIES</Button></Link>
    <a href='https://github.com/dtech-101/Zealot-Movie-web-app' target='blank'><Button variant='text'color='secondry'>About Me</Button></a>
    </div>
  </footer>
    </Box>
    )
}
export default Footer;