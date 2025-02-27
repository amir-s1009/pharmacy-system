import users from '@/_database/users.json';


export async function GET(req, {params}){
    const id = (await params).id;
    return Response.json(users.find(usr => usr.id === parseInt(id)) || {});
}