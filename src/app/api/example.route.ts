import { NextRequest } from "next/server";

export function GET(req: NextRequest) {

    return Response.json({
        message: 'Hello from example'
    }, {
        status: 200
    });
}