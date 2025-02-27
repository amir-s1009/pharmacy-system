'use client'

import { handleLogin, useLogin } from '@/hooks/login';
import './page.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function Login() {

  const [status, setStatus] = useState({}); // {code:200, message:"welcome!"}
  const [username, setUsername, password, setPassword] = useLogin();
  const router = useRouter();

  async function onSubmit(e){
    e.preventDefault();
    const authentication_status = await handleLogin(username, password);
    setStatus({...authentication_status});
  }

  useEffect(() => {
    if(status.code === 200){
      console.log('redirected');
      router.push("/dashboard");
    }
  }, [status])


  return (
    <div className='loginP'>
      <form action="" onSubmit={onSubmit}>
        <input value={username} onChange={(e)=> setUsername(e.target.value)} type='text' placeholder='enter username' />
        <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='enter password'/>
        <button type="submit">log in</button>
        <p>{status.message}</p>
      </form>
    </div>
  )
}

export default Login