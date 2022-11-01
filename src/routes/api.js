import express from 'express';
import customerListController from '../controller/customerListController';
const router = express.Router();

const initApiRoutes = (app) => {
    // path, handler   
    // rest api

    router.get("/customerList/read", customerListController.readFunc);
    router.post("/customerList/create", customerListController.createFunc);
    router.delete("/customerList/delete", customerListController.deleteFunc);

    return app.use("/api/v1/", router);
}

export default initApiRoutes;
