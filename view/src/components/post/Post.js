import './post.css';
import {MoreVert} from "@mui/icons-material";

export default function Post() {
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img src='/assets/person/6.jpeg' alt='' className='postProfileImg'/>
                        <span className='postUsername'>Guilherme Alves</span>
                        <span className='postDate'>5 Min Ago</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVert/>
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>Hey! This is my first post!</span>
                    <img src='/assets/post/1.jpeg' alt='' className='postImg'/>
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                        <img className='likeIcon' src='/assets/like.png'/>
                        <img className='likeIcon' src='/assets/heart.png'/>
                        <span className='postLikeCounter'>42 people like it</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentText'>9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}