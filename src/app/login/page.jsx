import './page.module.css';

import React from 'react'

function Login() {
  return (
    <div className='loginP'>
      <form action="">
        <input type='text' placeholder='enter username' />
        <input type="password" placeholder='enter password'/>
        <button type="button">log in</button>
      </form>
    </div>
  )
}

export default Login