import {Request, Response} from "express";
import {UserService} from "../service/userService";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    login = async (req: Request, res: Response) => {
        try {
            let user = await this.userService.checkLogin(req.body);
            if (user.check) {
                res.json(user)
            } else {
                res.json({
                    mess: 'Sai tên tài khoản hoặc mật khẩu',
                })
            }
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    register = async (req: Request, res: Response) => {
        try {
            let checkRegister = await this.userService.checkRegister(req.body);
            if (checkRegister) {
                res.json({
                    mess: "Tài khoản đã tồn tại"
                })
            } else {
                await this.userService.createUser(req.body);
                res.json({
                    mess: "Tạo tài khoản thành công"
                })
            }
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    changePassword = async (req: Request, res: Response) => {
        try {
            let user = await this.userService.checkChangePassword(req.params.id, req.body.oldPassword, req.body.newPassword)
            if (!user.check) {
                res.json({
                    user,
                    mess: "Nhập mật khẩu cũ không đúng"
                })
            } else {
                res.json({
                    user,
                    mess: "Đổi mật khẩu thành công"
                })
            }
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    showUsers = async (req: Request, res: Response) => {
        try {
            let users = await this.userService.getAll()
            res.json(users)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    deleteUser = async (req: Request, res: Response) => {
        try {
            await this.userService.remove(req.params.id);
            res.json({
                mess: "Xóa User thành công"
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
}

export default new UserController();