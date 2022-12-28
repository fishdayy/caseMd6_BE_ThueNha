"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const homeService_1 = require("../service/homeService");
class HomeController {
    constructor() {
        this.showHomes = async (req, res) => {
            try {
                let homes = await this.homeService.getAll();
                res.json(homes);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.createHome = async (req, res) => {
            try {
                let { idHome } = await this.homeService.createHome(req.body);
                res.json({
                    mess: "Tạo Home thành công",
                    idHome: idHome
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.findHomes = async (req, res) => {
            try {
                let homes = await this.homeService.findHomes(req.query.id, req.query.address, req.body.quantityBedroom, req.body.quantityBathroom);
                res.json(homes);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.findById = async (req, res) => {
            try {
                let home = await this.homeService.findById(req.params.id);
                res.json(home);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.homeService = new homeService_1.HomeService();
    }
}
exports.HomeController = HomeController;
exports.default = new HomeController();
//# sourceMappingURL=homeController.js.map