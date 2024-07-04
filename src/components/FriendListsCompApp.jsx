import React from 'react';
import Navbar from './Navbar/Navbar';
import FriendLists from './FriendList/FriendList';
import AddFriends from './AddFriends/AddFriends';
import Footer from './Footer/Footer';




const FriendListsCompApp = (props) => {




  return (
    <div>
      <div className='app-wrapper'>
        <header></header>
        <div className='appVrapperNav'>
          <Navbar />
        </div>
        <div className='appVrapperADD'>
          <AddFriends state={props.state.addfriends} />
        </div>
        <div className='appVrapperContent'>
          <FriendLists />
        </div>
        <div className='appVrapperFoot'>
          <Footer />
        </div>
      </div>
    </div >
  );
}

export default FriendListsCompApp;