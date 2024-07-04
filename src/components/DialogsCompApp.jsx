import React from 'react';
import Navbar from './Navbar/Navbar';
import Dialogs from './Dialogs/Dialogs';
import AddFriends from './AddFriends/AddFriends';
import Footer from './Footer/Footer';




const DialogsCompApp = (props) => {




  return (
    <div>
      <div className='app-wrapper'>
        <header></header>
        <div className='appVrapperNav'>
          <Navbar />
        </div>
        <div className='appVrapperADD'>
          <AddFriends state={props.state.addfriends}/>
        </div>
        <div className='appVrapperContent'>
          <Dialogs state={props.state.dialogsPage} />
        </div>
        <div className='appVrapperFoot'>
          <Footer />
        </div>
      </div>
    </div >
  );
}

export default DialogsCompApp;