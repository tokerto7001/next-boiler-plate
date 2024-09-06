import { NextRequest } from "next/server";


export function generateNextRequest<IBody extends Record<string, string>, IQueryParams extends Record<string, string>>(path: string, config: {
    method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
    body?: IBody;
    headers?: Record<string, string>;
    queryParams?: IQueryParams
}): NextRequest {
    
    const basePath = 'http://localhost:3000';
    const url = basePath + path;

    const requestInitObject = {
        method: config.method,
        headers: {
            ...config.headers,
            'Content-Type': 'application/json'
        },
        ...config.body && {
            body: JSON.stringify(config.body)
        }
    };

    const request = new NextRequest(url, requestInitObject);
    if(config.queryParams) {
        Object.keys(config.queryParams).map((key) => {
            const value = config.queryParams![key];
            request.nextUrl.searchParams.set(key, value);
        })
    }

    return request;
}