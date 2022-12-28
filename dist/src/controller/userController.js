"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userService_1 = require("../service/userService");
class UserController {
    constructor() {
        this.login = async (req, res) => {
            try {
                let user = await this.userService.checkLogin(req.body);
                if (user.check) {
                    res.json(user);
                }
                else {
                    res.json({
                        mess: 'Sai tên tài khoản hoặc mật khẩu',
                    });
                }
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.register = async (req, res) => {
            try {
                let checkRegister = await this.userService.checkRegister(req.body);
                if (checkRegister) {
                    res.json({
                        mess: "Tài khoản đã tồn tại"
                    });
                }
                else {
                    await this.userService.createUser(req.body);
                    res.json({
                        mess: "Tạo tài khoản thành công"
                    });
                }
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.changePassword = async (req, res) => {
            try {
                let user = await this.userService.checkChangePassword(req.params.id, req.body.oldPassword, req.body.newPassword);
                if (!user.check) {
                    res.json({
                        user,
                        mess: "Nhập mật khẩu cũ không đúng"
                    });
                }
                else {
                    res.json({
                        user,
                        mess: "Đổi mật khẩu thành công"
                    });
                }
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.showUsers = async (req, res) => {
            try {
                let users = await this.userService.getAll();
                res.json(users);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.deleteUser = async (req, res) => {
            try {
                await this.userService.remove(req.params.id);
                res.json({
                    mess: "Xóa User thành công"
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.userService = new userService_1.UserService();
    }
}
exports.UserController = UserController;
exports.default = new UserController();
//# sourceMappingURL=userController.js.map