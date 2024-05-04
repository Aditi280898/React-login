import React, { useState } from 'react';
import './LoginSignup.css'; // Corrected import statement for CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  return (
    <div>
      <div className='Container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          {action==="Login" ? null :
            <div className='input'>
                <FontAwesomeIcon icon={faUser} />
              <input type='text' placeholder='Username'/>
            </div>
          }
          <div className='input'>
          <FontAwesomeIcon icon={faEnvelope} />
            <input type='email' placeholder='Enter Email id'/>
          </div>
          <div className='input'>
          <FontAwesomeIcon icon={faLock} />
            <input type='password' placeholder='Enter your Password'/>
          </div>
        </div>
        {action==="Sign Up" ? null :
                <div className='forget-password'>lost Password? <span>click Here!</span></div>

        }
        <div className='Submit-Container'>
          <div className={action==="Login"?"Submit gray":"Submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"Submit gray":"Submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
