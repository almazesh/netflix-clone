import { useRef, useState } from 'react'
import { auth } from '../../Firebase'
import './SignUp.css'
const SignUp = () =>{
    
    const emailRef = useRef(null)
    const passwordRef = useRef(null)


    const register = (e) =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value

        ).then((authUser) =>{
            console.log(authUser)
        })
        .catch(error =>{
            alert(error.message)
        })
    } 

    const SignIn = (e) =>{
        e.preventDefault()

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => console.log(authUser))
        .catch(err => alert(err.message))
    }

     const onSubmit = () =>{
        const googleAuth = new firebase.auth.GoogleAuthProvider()
    
        firebase.auth().signInWithPopup(googleAuth)
        .then(res =>{
          var token = res.credential.accessToken
    
          var user = res.user
        })
      }
    return (
        <>
            <div className='signUp_screen'>
                <form>
                    <h1>Sign In</h1>
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input ref={passwordRef} type="password" placeholder="Password    " />
                    <button type="submit" onClick={SignIn}>Sign In</button>
                    <h4><span>New to Netflix? </span><i onClick={register}>SignUp now.</i></h4>
                    <a onClick={onSubmit}>or SignUp with Google now</a>
                </form>
            </div>
        </>
    )
}


export default SignUp;