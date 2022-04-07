import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {BASE_NAME} from 'src/config';
import App from './App';
import {AppProvider} from 'src/app-context';

ReactDOM.render(
    <AppProvider>
        <BrowserRouter basename={BASE_NAME}>
            <App/>
        </BrowserRouter>
    </AppProvider>
    ,
    document.getElementById('root'),
);
