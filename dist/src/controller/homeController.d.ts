import { Request, Response } from "express";
export declare class HomeController {
    private homeService;
    constructor();
    showHomes: (req: Request, res: Response) => Promise<void>;
    createHome: (req: Request, res: Response) => Promise<void>;
    findHomes: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<void>;
}
declare const _default: HomeController;
export default _default;
