import './Nav.css'
import { useState , useEffect } from 'react'
const Nav = () =>{
    const [show , handleShow]  = useState(false)

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
                ' alt='' className='navLogo'/>

                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png'
                alt='' className='navAvatar'/>
            </div>

            
        </div>
    )
}

export default Nav