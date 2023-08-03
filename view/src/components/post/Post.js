import './post.css';
import {MoreVert} from "@mui/icons-material";
import {useEffect, useState} from "react";
import axios from "axios";
import {format} from 'timeago.js';

export default function Post({post}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});


    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
    }

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`)
            setUser(res.data)
        };
        fetchUser();
    }, [post.userId]);

    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img src={user.profilePicture || PF + 'person/noAvatar.png'} alt=''
                             className='postProfileImg'/>
                        <span className='postUsername'>{user.username}</span>
                        <span className='postDate'>{format(post.createdAt)}</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVert/>
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>{post?.desc}</span>
                    <img src={PF + post.img} alt='' className='postImg'/>
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                        <img className='likeIcon' src={`${PF}like.png`} alt='' onClick={likeHandler}/>
                        <img className='likeIcon' src={`${PF}heart.png`} alt='' onClick={likeHandler}/>
                        <span className='postLikeCounter'>{like} people like it</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentText'>{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}