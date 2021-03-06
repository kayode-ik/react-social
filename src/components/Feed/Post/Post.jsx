import React, { useState } from 'react'
import './post.css';
import { MoreVert } from '@material-ui/icons';
import { Users } from "../../../dummyData"


function Post({post}) {

    const [like, setLike ] = useState(post.like)
    const [isLiked, setisLiked ] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like + 1)
        setisLiked(!isLiked)
    }
    // const user = Users.filter(u => u.id===1 )

    // console.log(user[0].username);
    // console.log(post);
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" 
                        src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} 
                        alt="" />
                        <div className="postUsername">
                            {Users.filter((u) => u.id === post?.userId)[0].username}
                            </div>
                        <div className="postDate">{post.date}</div>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postTest">{post?.desc}</span>
                    <img src={post.photo} alt="" />
                </div>
              
                <div className="postBottom">
                    <div className="postBottomLeft">
                    <img className="likeIcon"src="/assets/like.png" onClick = {likeHandler} alt="" />
                    <img className="likeIcon"src="/assets/heart.png" onClick = {likeHandler}  alt="" />
                    <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Post
