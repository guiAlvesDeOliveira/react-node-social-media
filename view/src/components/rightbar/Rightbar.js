import './rightbar.css'
import {Users} from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar() {
    return (
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                <div className='birthdayContainer'>
                    <img className='birthdayImg' src='/assets/gift.png' alt=''/>
                    <span
                        className='birthdayText'><b>Pola Foster</b> and <b>3 other friends</b> have birthday today</span>
                </div>
                <img src='/assets/ad.png' className='rightbarAd' alt=''/>
                <h4 className='rightbarTitle'>Oline Friends</h4>
                <ul className='rightbarFriendList'>
                    {Users.map(u=> (
                        <Online user={u} key={u.id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}