import { cookies } from "next/headers";

export async function fetchData(url){
    const response = await fetch(`http://localhost:3000/api/${url}`, {
        credentials:"include",
        headers:{
            Cookie: (await cookies()).toString() 
        }
    });
    const data = await response.json();
    return data;
}