import {Request, Response} from "express";
import {HomeService} from "../service/homeService";

export class HomeController {
    private homeService: HomeService;

    constructor() {
        this.homeService = new HomeService();
    }

    showHomes = async (req: Request, res: Response) => {
        try {
            let homes = await this.homeService.getAll()
            res.json(homes)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    createHome = async (req: Request, res: Response) => {
        try {
            let {idHome} = await this.homeService.createHome(req.body);
            res.json({
                mess: "Tạo Home thành công",
                idHome: idHome
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    findHomes = async (req: Request, res: Response) => {
        try {
            let homes = await this.homeService.findHomes(req.query.id, req.query.address, req.body.quantityBedroom, req.body.quantityBathroom);
            res.json(homes)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    findById = async (req: Request, res: Response) => {
        try {
            let home = await this.homeService.findById(req.params.id);
            res.json(home)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
}

export default new HomeController();