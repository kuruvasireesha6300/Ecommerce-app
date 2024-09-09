
import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import {auth, provider} from '../firebase'
import { useNavigate } from 'react-router-dom'

 

function Login(props) //props ==> info = {setLoggedIn} 
{

  const navigate = useNavigate()

  function pleaseLogIn()
  {
    //Display the popup

    signInWithPopup(auth, provider)
    .then(function()
    {
      //It means the user is logged in
      props.info(true)
      //Logic to display the mail id and the username that is used to login

      const userName = auth.currentUser.displayName
      const email = auth.currentUser.email
      console.log(userName, email)

      navigate("/home")
    })
    .catch(function(error)
    {
      console.log(error)
    })
  }
  
  return (
    <div style={{margin:30}}>
        <button className='btn btn-outline-primary' onClick={pleaseLogIn} >Login with Google</button>
    </div>
  )
}

export default Login