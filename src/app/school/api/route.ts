export async function GET() {
    return Response.json([{id:101,name:'abc school'},{id:102,name:'lms school'}])
}

export async function POST(request:Request) {
    const req=await request.json();
    return new Response(JSON.stringify(req),{headers:{'content-type':'application/json'},status:201})
}

