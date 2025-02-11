
import { Router } from 'express';
import BaseController from '../controller/shortcontroller';

class BaseRoutes {
    router= Router();

    constructor() {
        // this.router = Router();
        this.intializeRoutes();
    }

    intializeRoutes() {
        
        this.router.post("/getshorturl", BaseController.shorten);
        }
}

export default new BaseRoutes().router;




