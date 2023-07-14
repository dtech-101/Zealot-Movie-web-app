import { useState } from 'react';
import {Box,Typography,ButtonGroup,Button,AppBar,TextField,Stack} from '@mui/material'
function Homepage()
{
    return(
        <Box>
        <AppBar sx={{position: 'fixed'}}>
          <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography sx={{color: 'white',fontSize: '25px',ml: '14px'}}>Zealot</Typography>
        <ButtonGroup orientation='horizontal' sx={{ml: 10,gap:5}}>
          <Button variant='text'color='secondry'>HOME</Button>
          <Button variant='text'color='secondry'>MOVIES</Button>
          <Button variant='text'color='secondry'>TV-SERIES</Button>
          <Button variant='text'color='secondry'>PORTFOLIO</Button>
        </ButtonGroup>
          <TextField id="filled-basic" label="Search" variant="filled" sx={{width: '300px'}}/>
        </Stack>
        </AppBar>
      </Box>
    )
}
export default Homepage;