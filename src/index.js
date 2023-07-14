import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider,createTheme} from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
const  theme = createTheme({
  palette:{
    primary:{
      main: '#F57C51',
    },
    secondry:{
      main: '#fff'
    }
  },
  typography:{
    fontFamily: 'cursive'
  }
})
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
