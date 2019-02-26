import HttpResponse from "./HttpResponse";

export default class JsonHttpResponse extends HttpResponse {
    constructor(statusCode: number = 200, body: any = {}, customHeaders: any = []) {
        customHeaders["Content-Type"] = "application/json";
        super(statusCode, JSON.stringify(body), customHeaders);
    }
}
