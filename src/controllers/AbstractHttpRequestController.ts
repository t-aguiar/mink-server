import IHttpRequestInterface from '../contracts/IHttpRequestInterface';
import ILambdaHandlerInterface from '../contracts/ILambdaHandlerInterface';
import HttpResponse from '../objects/HttpResponse';

export default class AbstractHttpRequestController implements ILambdaHandlerInterface, IHttpRequestInterface {
    protected event: any;
    protected context: any;

    /**
     *
     * @param {*} event
     * @param {*} context
     * @param {*} callback
     */
    constructor(event: any, context: any) {
        this.event = event;
        this.context = context;
    }

    public handle = async (): Promise<HttpResponse> => {
        let response: HttpResponse;

        switch (this.event.httpMethod) {
            case 'GET':
                response = await this.get();
                break;
            case 'POST':
                response = await this.post();
                break;
            case 'PUT':
                response = await this.put();
                break;
            case 'DELETE':
                response = await this.delete();
                break;
            case 'OPTIONS':
                response = await this.options();
                break;
            default:
                response = await this.unSupportedMethod();
                break;
        }

        return response;
    }

    public get = (): Promise<HttpResponse> => {
        return this.unSupportedMethod();
    }

    public post = (): Promise<HttpResponse> => {
        return this.unSupportedMethod();
    }

    public put = (): Promise<HttpResponse> => {
        return this.unSupportedMethod();
    }

    public delete = (): Promise<HttpResponse> => {
        return this.unSupportedMethod();
    }

    public options = (): Promise<HttpResponse> => {
        return this.success();
    }

    private unSupportedMethod = async (): Promise<HttpResponse> => {
        return new HttpResponse(405, `Unsupported method "${this.event.httpMethod}"`);
    }

    private success = async (): Promise<HttpResponse> => {
        return new HttpResponse(200, 'Success');
    }
}
