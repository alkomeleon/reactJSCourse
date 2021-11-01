import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Provider } from "react-redux";
import { store, persistor } from './store';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
import CircularProgress from "@mui/material/CircularProgress";


    ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<CircularProgress />}>
                <ThemeProvider theme={theme}>
                   <App />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

