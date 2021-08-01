import { useSelector } from "react-redux"
import { auth } from "../../Firebase"
import { selectUser } from "../../redux/userSlice"
import Nav from "../Navbar/Nav"
import './Profile.css'

const Profile = () =>{
    const user = useSelector(selectUser)
    return(
        <>
           <div className='profileScreen'>
                <Nav/>

                <div className="profile_body">
                    <h1>Edit Profile</h1>
                    <div className="profile_info">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png'/>
                        <div className='profile_details'>
                            <h2>{user.email}</h2>
                            <div className="profile_plans">
                                <h3>Plans</h3>
                                <button onClick={() => auth.signOut()}>
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Profile