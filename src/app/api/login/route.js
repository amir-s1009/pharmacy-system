import users from '@/_database/users.json';
import { cookies } from 'next/headers';

export async function POST(req){
    const {username, password} = await req.json();

    const auth_user = users.find((usr) => usr.username === username && usr.password === password);
    if(auth_user){
        (await cookies()).set('ssid', auth_user.id, {path:"/"});
        return new Response(`welcome ${auth_user.fullname}!`, {
            status:200,
        })
    }
    else{
        return new Response('you don\'t seem an authenticated user!', {status:401});
    }
}