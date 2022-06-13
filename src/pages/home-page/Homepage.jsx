import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {useAuth} from '../../context/useAuth'
import './Homepage.css'
import { Navigate } from 'react-router-dom'
import {Auth} from 'aws-amplify'

const Homepage=()=> {
  const {user}=useAuth()
  return <>
  {user ? <Navigate to='/search' replace/> :<div className='home-container'>
        <div className="login-container">
            <div class='logo-container'>
              <img class="logo"src="https://res.cloudinary.com/dqqehaaqo/image/upload/v1654891866/mockWyzr-logos_transparent_pmttb5.png" alt="" />
            </div>
            <button className="login-button" onClick={()=>Auth.federatedSignIn({provider: 'Google' })}>
                <div className='google-logo'><FcGoogle size={25}/></div> <h3>Sign in</h3>
            </button>
        </div>
    </div>}
  </>
}

export default Homepage

//https://res.cloudinary.com/dqqehaaqo/image/upload/v1654891866/mockWyzr-logos_transparent_pmttb5.png