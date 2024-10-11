export async function GET(request:Request,{params}:{params:{id:string}}) {

    return Response.json({id:params.id,'msg':'getFllJson'})
}

export async function PATCH(request:Request,{params}:{params:{id:string}}) {
    const {name}=await request.json()
    return Response.json({id:params.id,text:name})
}

export async function DELETE(request:Request,{params}:{params:{id:string}}) {
    return Response.json({id:params.id,text:"deleted"})
}