import { NextRequest } from "next/server"
export const dynamic="force-dynamic"
export async function GET(request: NextRequest) {
 return new Response(JSON.stringify({"time":new Date().toLocaleTimeString()}))   
}