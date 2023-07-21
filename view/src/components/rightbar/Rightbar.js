import './rightbar.css'

export default function Rightbar() {
    return (
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                <div className='birthdayContainer'>
                    <img className='birthdayImg' src='/assets/gift.png' alt=''/>
                    <span className='birthdayText'><b>Pola Foster</b> and <b>3 other friends</b> have birthday today</span>
                </div>
                <img src='/assets/ad.png' className='rightbarAd' alt=''/>
                <h4 className='rightbarTitle'>Oline Friends</h4>
                <ul className='rightbarFriendList'>
                    <li className='rightbarFriend'>
                        <div className='rightbarProfileImgContainer'>
                            <img className='rightbarProfileImg' src='/assets/person/8.jpeg' alt=''/>
                            <span className='rightbarOnline'></span>
                        </div>
                        <span className='rightbarUsername'>Jhon Carter</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}