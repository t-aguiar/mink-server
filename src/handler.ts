import EstoreController from './controllers/EstoreController';
import HttpResponse from './objects/HttpResponse';
import JsonHttpResponse from './objects/JsonHttpResponse';

const routes: any = {
    '/estore': EstoreController,
};

export const handle = async (event: any, context: any) => {
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

    return response.get();
};
