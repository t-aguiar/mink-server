import HttpResponse from "../objects/HttpResponse";

export default class HelloWorldService {
    public helloWorld = async (): Promise<HttpResponse> => {
        return new HttpResponse(200, `Hello World.`);
    }
}
