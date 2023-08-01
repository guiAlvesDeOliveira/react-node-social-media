import './share.css'
import {PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

export default function Share() {
    return (
        <div className='share'>
            <div className='shareWrapper'>
                <div className='shareTop'>
                    <img src='/assets/person/3.jpeg' className='shareProfilePicture' alt=''/>
                    <input className='shareInput' placeholder='What is in your mind'/>
                </div>
                <hr className='shareHr'/>
                <div className='shareBottom'>
                    <div className='shareOptions'>
                        <div className='shareOption'>
                            <PermMedia className='shareIcon' htmlColor='tomato'/>
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
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
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    )
}