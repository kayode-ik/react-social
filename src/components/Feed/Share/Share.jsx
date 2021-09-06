import React from 'react'
import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

function Share() {
    return (
        <div className="share">
           <div className="shareWrapper">
               <div className="shareTop">
                <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                <input type="text" placeholder="What's Happening" 
                 className="shareInput" />
               </div>
               <hr  className="shareHr" />
               <div className="shareBottom">
                   <div className="shareOptions">
                       <PermMedia htmlColor="tomato" className="shareIcon"/>
                       <span className="shareOptionsText">Photo or Video</span>
                   </div>
                   <div className="shareOptions">
                       <Label htmlColor="blue" className="shareIcon"/>
                       <span className="shareOptionsText">Tag</span>
                   </div>
                   <div className="shareOptions">
                       <Room htmlColor="green" className="shareIcon"/>
                       <span className="shareOptionsText">Location</span>
                   </div>
                   <div className="shareOptions">
                       <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                       <span className="shareOptionsText">Feelings</span>
                   </div>
               <button className="shareButton">Share</button>
               </div>
           </div>
        </div>
    )
}

export default Share
