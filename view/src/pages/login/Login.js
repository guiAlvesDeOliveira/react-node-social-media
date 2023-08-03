import './login.css';
import {useRef} from "react";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const handleClick = (e) => {
        e.preventDefault();
        console.log('clicked');
    }
    return (
        <div className='login'>
            <div className='loginWrapper'>
                <div className='loginLeft'>
                    <h3 className='loginLogo'>Alvesocial</h3>
                    <span className='loginDesc'>Connect with friends and the world around you on Alvesocial.</span>
                </div>
                <form className='loginRight' onSubmit={handleClick}>
                    <div className='loginBox'>
                        <input className='loginInput' type='email' placeholder='Email' ref={email} required/>
                        <input className='loginInput' type='password' placeholder='Password' ref={password} required minLength='6'/>
                        <button className='loginButton'>Log In</button>
                        <span className='loginForgot'>Forgot Password?</span>
                        <button className='loginRegisterButton'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}