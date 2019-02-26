import HttpResponse from "../objects/HttpResponse";

export default interface ILambdaHandlerInterface {
    handle(): Promise<HttpResponse>;
}
