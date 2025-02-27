import { useState } from "react";

export function useStatus(){
    const [status, setStatus] = useState({}); // {code:200, message:"welcome!"}

    return [status, setStatus];
}

export function useLogin(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return [username, setUsername, password, setPassword];
}

export async function handleLogin(username, password){
    let status = {};
    try{
        let response = await fetch('http://localhost:3000/api/login', {
            method:"POST",
            credentials:'include',
            body:JSON.stringify({username, password})
        });
        status.code = response.status;
        response = await response.text();
        status.message = response;
    }
    catch(err){
        console.log("error", err);
        status = {code:500, message:"error connecting to server"}
    }
    finally{
        return status;
    }
}