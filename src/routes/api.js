import express from 'express';
import apiController from '../controller/apiController';
import userController from '../controller/userController';
import coursesController from '../controller/coursesController';
import lessonController from '../controller/lessonController';
import coursesDetailController from '../controller/coursesDetailController';
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

    router.get("/courses/read", coursesController.readFunc);
    router.post("/courses/create", coursesController.createFunc);
    router.put("/courses/update", coursesController.updateFunc);
    router.delete("/courses/delete", coursesController.deleteFunc);

    router.get("/lesson/read", lessonController.readFunc);
    router.post("/lesson/create", lessonController.createFunc);
    router.put("/lesson/update", lessonController.updateFunc);
    router.delete("/lesson/delete", lessonController.deleteFunc);

    router.get("/coursesDetail/read", coursesDetailController.readFunc);
    router.post("/coursesDetail/create", coursesDetailController.createFunc);
    router.put("/coursesDetail/update", coursesDetailController.updateFunc);
    router.delete("/coursesDetail/delete", coursesDetailController.deleteFunc);

    return app.use("/api/v1/", router);
}

export default initApiRoutes;
