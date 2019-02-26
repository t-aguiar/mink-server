import HttpResponse from "./objects/HttpResponse";
import HelloWorldController from "./controllers/HelloWorldController";
import JsonHttpResponse from "./objects/JsonHttpResponse";

const routes: any = {
    "/hello": HelloWorldController,
};

export const handle = async (event: any, context: any) => {
    // console.log("request", event);

    let response: HttpResponse;

    try {
        const route: any = (routes[event.path]) || null;
        if (route) {
            response = await (new route(event, context)).handle();
        } else {
            response = new HttpResponse(405, `Unsupported method "${event.httpMethod}" for path "${event.path}"`);
        }
    } catch (err) {
        response = new JsonHttpResponse(500, err);
    }

    // console.log("response", response.get());

    return response.get();
};
