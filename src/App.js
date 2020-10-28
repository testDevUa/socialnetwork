import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './libraries/Dialogs/Dialogs';
import Header from './libraries/Header/Header';
import LeftSideBar from './libraries/LeftSideBar/LeftSideBar';
import Music from './libraries/Music/Music';
import News from './libraries/News/News';
import Profile from './libraries/Profile/Profile';
import Settings from './libraries/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='pageInner'>
          <LeftSideBar />
          <div className='Content'>
            <Route path='/Profile' component={Profile} />
            <Route path='/Dialogs' component={Dialogs} />
            <Route path='/News' component={News} />
            <Route path='/Music' component={Music} />
            <Route path='/Settings' component={Settings} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
