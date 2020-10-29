import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from './libraries/Profile/Posts/Post/Post';
import DialogsItem from './libraries/Dialogs/Messages/DialogsItem/DialogsItem';
import state from './redux/state';
import { BrowserRouter, Route } from 'react-router-dom';

// let posts = postsData.map( p => <Post text={p.text} />);

// let dialogs = DialogsData.map ( d => <DialogsItem name={d.name} id={d.id} />)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
