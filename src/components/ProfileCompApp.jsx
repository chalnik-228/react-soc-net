import React from 'react';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import AddFriends from './AddFriends/AddFriends';
import Footer from './Footer/Footer';




const ProfileCompApp = (props) => {




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
          <Profile state={props.state.profilePage} />
        </div>
        <div className='appVrapperFoot'>
          <Footer />
        </div>
      </div>
    </div >
  );
}
{/* <Header /> */}
          {/* <Routes> */}
            {/* <Route path='/dialogs' Component={() => } /> */}
            {/* <Route path='/' Component={() => <Profile state={props.state.profilePage} />} /> */}
            {/* <Route path='/Profile' Component={() => <Profile state={props.state.profilePage} />} /> */}
            {/* <Route path='/FriendLists' Component={() => } />
          </Routes> */}

export default ProfileCompApp;