import './Nav.css'
import { useState , useEffect } from 'react'
import { useHistory } from 'react-router-dom'
const Nav = () =>{
    const [show , handleShow]  = useState(false)
    const history = useHistory()
    const stickyBar = () =>{
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll' , stickyBar)
        return () => {
            window.removeEventListener('scroll' , stickyBar)
        }
    } , [])
    return (
        <div className={`Nav ${show && 'navBlack'}`}>
            <div className="navContent">
                <img src='https://www.freepnglogos.com/uploads/netflix-logo-0.png
                ' alt='' className='navLogo' onClick={() => history.push('/')}/>

                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png'
                alt='' className='navAvatar' onClick={() => history.push('/profile')}/>
            </div>

            
        </div>
    )
}

export default Nav