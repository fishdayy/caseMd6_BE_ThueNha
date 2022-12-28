import router from "express";
import homeController from "../controller/homeController";

export const homeRouter = router();

homeRouter.get('/', homeController.showHomes)
homeRouter.post('/', homeController.createHome)
homeRouter.post('/find-homes', homeController.findHomes)
homeRouter.get('/:id', homeController.findById)