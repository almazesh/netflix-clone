import { useState } from 'react';
import './Login.css'
import SignUp from '../SignIn/SignUp';
const Login = () => {
    const [signIn , setSignIn] = useState(false)
    return(
        <>
            <div className='loginScreen'>
                <div className='login_background'>
                    <img className='screen_logo' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt=''/>

                    <button className='screen_btn' onClick={() => setSignIn(true)}>
                        Sign in
                    </button>
                    <div className="login_gradient" />
                </div>
                <div className="login_body">
                    {signIn ? (
                        <SignUp />
                    ) : (
                        <>
                            <h1>Unlimited films, TV programmes and more</h1>
                            <h2>Watch anywhere , Cancel at any time</h2>
                            <h3>Ready to Watch? Enter your email to create or restart your membership</h3>

                            <div className='login_input'>
                                <form>
                                    <input type="email" placeholder="Email addres" />
                                    <button onClick={() => setSignIn(true)} className="loginInput_button">GET STARTED</button>
                                </form>
                            </div>
                        </>
                    )}
                   
                </div>
            </div>
        </>
    )
}


export default Login;

