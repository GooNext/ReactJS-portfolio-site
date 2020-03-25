import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import Routes from './components/Routes'

const App = () => {
    return (
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root_ru'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


