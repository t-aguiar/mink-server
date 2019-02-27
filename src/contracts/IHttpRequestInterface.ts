import HttpResponse from '../objects/HttpResponse';

export default interface IHttpRequestInterface {
    get(): Promise<HttpResponse>;
    post(): Promise<HttpResponse>;
    put(): Promise<HttpResponse>;
    delete(): Promise<HttpResponse>;
    options(): Promise<HttpResponse>;
}
