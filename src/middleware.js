import { NextResponse } from "next/server";


export function middleware(request){
    const path = request.nextUrl.pathname;
    const ssid = request.cookies.get('ssid');

    if(ssid){
        return NextResponse.next()
    }
    else{
        if(path.startsWith("/api")){
            return new Response(null, {status:401});
        }
        else{
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
}

export const config = {
    matcher:[
        '/dashboard/:path*',
        '/api/visits',
        '/api/prescriptions',
        '/api/users',
    ]
}