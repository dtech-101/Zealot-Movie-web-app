import {Box,Typography,ButtonGroup,Button,AppBar,TextField,Stack} from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer()
{
    return(
        <Stack sx={{backgroundColor: 'primary.main',mt: 1}}direction="row" justifyContent ='space-around'>
            <a style={{color: 'white'}} href='#'><WhatsAppIcon/></a>
            <a style={{color: 'white'}} href='https://www.linkedin.com/in/otiete-ayebanua-085a07276'><LinkedInIcon/></a>
            <a style={{color: 'white'}} href='https://github.com/dtech-101'><GitHubIcon/></a>
        </Stack>
    )
}
export default Footer;