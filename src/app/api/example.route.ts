import { NextRequest } from "next/server";

export function GET(req: NextRequest) {

    const queryParams = req.nextUrl.searchParams;
    const exampleParam = queryParams.get('example');

    if(exampleParam) {
        return Response.json({
            message: 'Hello from example'
        }, {
            status: 200
        });
    } else {
        return Response.json({
            message: 'Bad Request'
        }, {
            status: 400
        });
    }

}