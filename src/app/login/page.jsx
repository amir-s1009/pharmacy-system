'use client'

import { handleLogin, useLogin } from '@/hooks/login';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLoadingContext } from '@/context/loading';

function Login() {

  const [status, setStatus] = useState({}); // {code:200, message:"welcome!"}
  const [username, setUsername, password, setPassword] = useLogin();
  const router = useRouter();
  const setIsPending = useLoadingContext();

  async function onSubmit(e){
    setIsPending(true);
    e.preventDefault();
    const authentication_status = await handleLogin(username, password);
    setIsPending(false);
    setStatus({...authentication_status});
  }

  useEffect(() => {
    if(status.code === 200){
      router.push("/dashboard");
    }
  }, [status])


  return (
    <div className={styles.loginP}>
      <form action="" onSubmit={onSubmit}>
        <h1>Log in to Pharmacy24</h1>
        <input value={username} onChange={(e)=> setUsername(e.target.value)} type='text' placeholder='enter username' />
        <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='enter password'/>
        <button type="submit">log in</button>
        <p>{status.message}</p>
      </form>
    </div>
  )
}

export default Login