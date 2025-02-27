import users from '@/_database/users.json';

export async function GET(){
    return Response.json(users);
}