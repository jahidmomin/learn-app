import { NextResponse, type NextRequest } from "next/server"

export function middleware(request:NextRequest) {
    //second apprch
    if(request.nextUrl.pathname==="/profile")
        // return NextResponse.redirect(new URL("/",request.url));
        return NextResponse.rewrite(new URL("/school/api",request.url));
}

// first approch

// export const config={
//     matcher:"/profile"
// }