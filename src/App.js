import React from 'react';
import './App.css';
import FriendListsCompApp from './components/FriendListsCompApp';
import DialogsCompApp from './components/DialogsCompApp';
import ProfileCompApp from './components/ProfileCompApp';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import LoginReg from './Newlist/LoginReg';
import RegLogin from './Newlist/RegLogin';





const App = (props) => {




  return (
    <div>
        <Header />
        <Routes>
          <Route path='/' Component={() => <ProfileCompApp state={props.state}/>} />
          <Route path='/FriendLists' Component={() => <FriendListsCompApp state={props.state}/>} />
          <Route path='/dialogs' Component={() => <DialogsCompApp state={props.state} />} />
          <Route path='/Profile' Component={() => <ProfileCompApp state={props.state} />} />
          <Route path='/Login' Component={() => <LoginReg />} />
          <Route path='/Register' Component={() => <RegLogin />} />
        </Routes>
    </div>
  );
}

export default App;