import './login.css';

export default function Login() {
    return (
        <div className='login'>
            <div className='loginWrapper'>
                <div className='loginLeft'>
                    <h3 className='loginLogo'>Alvesocial</h3>
                    <span className='loginDesc'>Connect with friends and the world around you on Alvesocial.</span>
                </div>
                <div className='loginRight'>
                    <div className='loginBox'>
                        <input className='loginInput' type='email' placeholder='Email'/>
                        <input className='loginInput' type='password' placeholder='Password'/>
                        <button className='loginButton'>Log In</button>
                        <span className='loginForgot'>Forgot Password?</span>
                        <button className='loginRegisterButton'>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}