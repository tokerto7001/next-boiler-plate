import { GET as exampleRoute } from "@/app/api/example.route";
import { generateNextRequest } from "@/utils/generateNextRequest";
import { expect, test } from "vitest";

test('Example API Route GET SUCCESS Test', async() => {
    const generatedRequest = generateNextRequest('/example', {
        method: 'GET',
        queryParams: {
            example: 'example'
        }
    });

    const response = exampleRoute(generatedRequest);
    const resObject = await response.json();
    expect(response.status).toBe(200);
    expect(resObject.message).toBe('Hello from example');

});

test('Example API Route GET FAILED Test', async() => {
    const generatedRequest = generateNextRequest('/example', {
        method: 'GET',
    });

    const response = exampleRoute(generatedRequest);
    const resObject = await response.json();
    expect(response.status).toBe(400);
    expect(resObject.message).toBe('Bad Request');

});