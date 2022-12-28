import router from "express";
import userController from "../controller/userController";

export const userRouter = router();
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.post('/change-password/:id' ,userController.changePassword);
userRouter.get('/' ,userController.showUsers);
userRouter.delete('/:id' ,userController.deleteUser);
userRouter.delete('/:id' ,userController.deleteUser);