import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';
import './Profile.css'


const Profilesum = (props) => {
    return(
    <div class="col-md-7">
        <div class='Feed_content'>
            <Profileinfo state={props.state.mypost} />
            <div class='posts'>
                <MyPosts state={props.state} />
            </div>
        </div>
    </div>)
}
export default Profilesum;