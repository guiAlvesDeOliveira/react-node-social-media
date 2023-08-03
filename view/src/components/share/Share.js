import './share.css'
import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material";
import {useContext, useRef, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file, setFile] = useState();

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            console.log(newPost);
            try {
                await axios.post("/upload", data);
            } catch (err) {}
        }
        try {
            await axios.post("/posts", newPost);
            window.location.reload();
        } catch (err) {}
    };

    return (
        <div className='share'>
            <div className='shareWrapper'>
                <div className='shareTop'>
                    <img src={user.profilePicture ? PF + user.profilePicture : PF + 'person/noAvatar.png'}
                         className='shareProfilePicture' alt=''/>
                    <input className='shareInput' placeholder={'What is in your mind ' + user.username + '?'} ref={desc}/>
                </div>
                <hr className='shareHr'/>
                <form className='shareBottom' onSubmit={submitHandler}>
                    <div className='shareOptions'>
                        <label htmlFor='file' className='shareOption'>
                            <PermMedia className='shareIcon' htmlColor='tomato'/>
                            <span className='shareOptionText'>Photo or Video</span>
                            <input style={{display: "none"}} type='file' id='file' accept='.png, .jpg, .jpeg' onChange={(e)=>setFile(e.target.files[0])}/>
                        </label>
                        <div className='shareOption'>
                            <Label className='shareIcon' htmlColor='blue'/>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className='shareOption'>
                            <Room className='shareIcon' htmlColor='green'/>
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className='shareOption'>
                            <EmojiEmotions className='shareIcon' htmlColor='goldenrod'/>
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className='shareButton' type={"submit"}>Share</button>
                </form>
            </div>
        </div>
    )
}