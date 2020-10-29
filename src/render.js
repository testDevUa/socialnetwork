import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import {addPost} from './redux/state';

const Render = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
            <App state={state} addPost={addPost}/>
          </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

export default Render;


