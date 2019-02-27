import HttpResponse from '../objects/HttpResponse';

export default class EstoreService {
    public create = async (): Promise<HttpResponse> => {
        return new HttpResponse(200, 'Estore created');
    }

    public get = async (): Promise<HttpResponse> => {
        return new HttpResponse(200, 'Estore retrieved');
    }
}
