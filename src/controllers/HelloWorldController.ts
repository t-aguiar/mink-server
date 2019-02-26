import HttpResponse from "../objects/HttpResponse";
import AbstractHttpRequestController from "./AbstractHttpRequestController";
import HelloWorldService from "../services/HelloWorldService";

export default class HelloWorldController extends AbstractHttpRequestController {
    private service: HelloWorldService;

    constructor(event: any, context: any) {
        super(event, context);
        this.service = new HelloWorldService();
    }

    public get = async (): Promise<HttpResponse> => {
        return this.service.helloWorld();
    }
}
