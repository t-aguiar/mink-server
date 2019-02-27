export default class HttpResponse {
    public statusCode: number;
    public headers: any;
    public body: any;

    constructor(statusCode: number = 200, body: any = {}, customHeaders: any = []) {
        this.statusCode = statusCode;
        this.body = body;

        this.headers = {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key',
            'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
            'Access-Control-Allow-Origin': '*',
        };

        Object.keys(customHeaders).forEach((key: any) => {
            this.headers[key] = customHeaders[key];
        });
    }

    public get = (): any => {
        return {
            statusCode: this.statusCode,
            body: this.body,
            headers: this.headers,
        };
    }
}
