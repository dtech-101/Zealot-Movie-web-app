import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider,createTheme} from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
const  theme = createTheme({
  palette:{
    primary:{
      main: '#A27035',
    },
    secondry:{
      main: '#fff'
    }
  },
  typography:{
    fontFamily: 'poppins'
  }
})
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
