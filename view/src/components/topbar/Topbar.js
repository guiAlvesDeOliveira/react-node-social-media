import './topbar.css'
import {Person, Search, Chat, Notifications} from '@mui/icons-material'
import {Link} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

export default function Topbar() {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="topbarContainer">
            <div className='topbarLeft'>
                <Link to={'/'} style={{textDecoration: "none"}}>
                    <span className='logo'>Alvesocial</span>
                </Link>
            </div>
            <div className='topbarCenter'>
                <div className='searchbar'>
                    <Search className='searchIcon'/>
                    <input className='searchInput' placeholder='Search for anything'/>
                </div>
            </div>
            <div className='topbarRight'>
                <div className='topbarLinks'>
                    <span>Homepage</span>
                    <span>Timeline</span>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarIconItem'>
                        <Person/>
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className='topbarIconItem'>
                        <Chat/>
                        <span className='topbarIconBadge'>99+</span>
                    </div>
                    <div className='topbarIconItem'>
                        <Notifications/>
                        <span className='topbarIconBadge'>99+</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img className='topbarImg' alt='' src={user.profilePicture
                        ? PF + user.profilePicture
                        : PF + 'person/noAvatar.png'}/>
                </Link>
            </div>
        </div>
    )
}