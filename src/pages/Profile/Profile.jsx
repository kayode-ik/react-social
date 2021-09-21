import React from 'react'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './Profile.css'

function Profile() {
    return (
        <>
            <Topbar />

            <div className="profile">
                <Sidebar />
                <div className="profileRight">

                    <div className="profileRightTop">

                        <div className="profileCover">
                            <img 
                            className="profileCoverImg" 
                            src="assets/post/8.jpeg" 
                            alt="First" 
                            />
                            <img 
                            className="profileUserImg" 
                            src="assets/post/profilepic.jpg" 
                            alt="Second" 
                            />
                        </div>

                        <div className="profileInfo">
                            <h4 className="profileInfoName">Kayode Ipentan</h4>
                            <span className="profileInfoDesc">Hello My Friends</span>
                        </div>

                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile
