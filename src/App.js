import './App.css'
import HomeScreen from "./Components/Homescreen/HomeScreen";
import {BrowserRouter as Router, Switch , Redirect , Route} from 'react-router-dom'
import Login   from './Components/Login/Login';
import { useEffect } from 'react';
import { auth } from './Firebase';
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { login, logout, selectUser } from './redux/userSlice';
import Profile from './Components/Profile/Profile';
function App() {
  const user = useSelector(selectUser)
  
  const dispatch = useDispatch()

  useEffect(() =>{
    const unSubscribe = auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        console.log(authUser)
        dispatch(login({
           uid:authUser.uid,
           email:authUser.email
        }))
      }else{
        dispatch(logout())
      }
    })

    return unSubscribe;
  }, [dispatch])

  return (
        <div className='app'>
             <Router>
                {!user ? (
                   <Login />
                ) : (
                  <Switch>
                    <Route path='/profile'>
                        <Profile />
                    </Route>
                    <Route exact path='/'>
                        <HomeScreen />
                    </Route>
                  </Switch>  
                )}
            </Router>
        </div>
  );
}

export default App;