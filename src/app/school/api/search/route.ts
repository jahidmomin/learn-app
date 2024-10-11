import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    const reqHeaders=new Headers(request.headers);
    const hds=headers();
    console.log('====================================');
    console.log(reqHeaders.get('host'));
    console.log(hds.get('host'));
    console.log('====================================');
    let theme=request.cookies.get('theme');
    console.log(theme);
    console.log(cookies().get('theme'));
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    if(query==="redirect") redirect('/school')
    const query2 = searchParams.get('query2')
    return new Response("<h1>hello</h1>",{headers:{'content-type':'text/html','set-cookie':'theme=dark'}})
}
