import './feed.css'
import Share from "../share/Share";
import Post from "../post/Post";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("posts/timeline/64b2de3f6e877292e154098a");
            setPosts(res.data);
        }
        fetchPosts();
    }, [])
    return (
        <div className='feed'>
            <div className='feedWrapper'>
                <Share/>
                {posts.map((p) => (
                    <Post key={p._id} post={p}/>
                ))}
            </div>
        </div>
    )
}