import React from 'react'
import './CloseFriend.css'

function CloseFriend({user}) {
    return (
        <div>
            <li className="sidebarFriend">
                <img src={user.profilePicture} className="sidebarFriendImg" alt="" />
                <span className="sidebarFriendName">{user.username}</span>
            </li>

        </div>
    )
}

export default CloseFriend
