import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Provider } from "react-redux";
import { store } from './store';
import App from './App';


    ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
               <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

