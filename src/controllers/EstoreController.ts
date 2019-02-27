import AbstractHttpRequestController from './AbstractHttpRequestController';
import EstoreService from '../services/EstoreService';
import HttpResponse from '../objects/HttpResponse';

export default class EstoreController extends AbstractHttpRequestController {
    private service: EstoreService;

    constructor(event: any, context: any) {
        super(event, context);
        this.service = new EstoreService();
    }

    public get = async (): Promise<HttpResponse> => {
        return this.service.get();
    }

    public put = async (): Promise<HttpResponse> => {
        return this.service.create();
    }
}
