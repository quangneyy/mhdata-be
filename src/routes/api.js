import express from 'express';
import apiController from '../controller/apiController';
import userController from '../controller/userController';
import courseController from '../controller/courseController';
import lessonController from '../controller/lessonController';
import evaluateController from '../controller/evaluateController';
const router = express.Router();

const initApiRoutes = (app) => {
    // path, handler   
    // rest api
    // GET - R, POST - C, PUT - U, DELETE - D
    router.get("/test-api", apiController.testApi);
    router.post("/register", apiController.handleRegister);
    router.post("/login", apiController.handleLogin);

    router.get("/user/read", userController.readFunc); 
    router.post("/user/create", userController.createFunc); 
    router.put("/user/update", userController.updateFunc); 
    router.delete("/user/delete", userController.deleteFunc); 

    router.get("/course/read", courseController.readFunc);
    router.post("/course/create", courseController.createFunc);
    router.put("/course/update", courseController.updateFunc);
    router.delete("/course/delete", courseController.deleteFunc);

    router.get("/lesson/read", lessonController.readFunc);
    router.post("/lesson/create", lessonController.createFunc);
    router.put("/lesson/update", lessonController.updateFunc);
    router.delete("/lesson/delete", lessonController.deleteFunc);

    router.get("/evaluate/read", evaluateController.readFunc);
    router.post("/evaluate/create", evaluateController.createFunc);
    router.delete("/evaluate/delete", evaluateController.deleteFunc);

    return app.use("/api/v1/", router);
}

export default initApiRoutes;
