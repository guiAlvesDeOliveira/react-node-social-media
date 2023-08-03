import './login.css';
import {useContext, useRef} from "react";
import {loginCall} from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext";
import {CircularProgress} from "@mui/material";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch)
    }

    console.log(user)
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
                        <input className='loginInput' type='password' placeholder='Password' ref={password} required
                               minLength='6'/>
                        <button className='loginButton' disabled={isFetching}>{isFetching ?
                            <CircularProgress color="secondary" size='15px'/> : 'Log In'}</button>
                        <span className='loginForgot'>Forgot Password?</span>
                        <button className='loginRegisterButton' disabled={isFetching}>{isFetching ?
                            <CircularProgress color="secondary" size='15px'/> : 'Register'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}