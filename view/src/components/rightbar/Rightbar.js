import './rightbar.css'
import {Users} from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {
    const HomeRightBar = () => {
        return (
            <>
                <div className='birthdayContainer'>
                    <img className='birthdayImg' src='/assets/gift.png' alt=''/>
                    <span
                        className='birthdayText'><b>Pola Foster</b> and <b>3 other friends</b> have birthday today</span>
                </div>
                <img src='/assets/ad.png' className='rightbarAd' alt=''/>
                <h4 className='rightbarTitle'>Oline Friends</h4>
                <ul className='rightbarFriendList'>
                    {Users.map(u => (
                        <Online user={u} key={u.id}/>
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightBar = () => {
        return (
            <>
                <h4 className='rightbarTitle'>User Information</h4>
                <div className='rightbarInfo'>
                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>City: </span>
                        <span className='rightbarInfoValue'>São Paulo</span>
                    </div>
                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>From: </span>
                        <span className='rightbarInfoValue'>Jundiaí</span>
                    </div>
                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>Relationship: </span>
                        <span className='rightbarInfoValue'>Single</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>User Friends</h4>
                <div className='rightbarFollowings'>
                    <div className='rightbarFollowing'>
                        <img src='/assets/person/1.jpeg' className='rightbarFollowingImg' alt=''/>
                        <span className='rightbarFollowingName'>Jhon Carter</span>
                    </div>
                </div>

            </>
        )
    }

    return (
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                {profile ? <ProfileRightBar/> : <HomeRightBar/>}
            </div>
        </div>
    )
}