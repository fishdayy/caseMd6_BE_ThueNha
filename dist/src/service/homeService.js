"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeService = void 0;
const data_source_1 = require("../data-source");
const homes_1 = require("../model/homes");
class HomeService {
    constructor() {
        this.getAll = async () => {
            return await this.homeRepository.query(`select *
                                                from homes`);
        };
        this.createHome = async (home) => {
            let homeC = await this.homeRepository.save(home);
            return homeC;
        };
        this.findHomes = async (idCFind, addressFind, quantityBedroom, quantityBathroom) => {
            let homes;
            if (idCFind && addressFind) {
                homes = await this.homeRepository.query(`select * from homes where categoryId = ${idCFind} AND address like '%${addressFind}%' AND bedroom = ${quantityBedroom} AND bathroom = ${quantityBathroom}`);
            }
            if (idCFind && !addressFind) {
                homes = await this.homeRepository.query(`select * from homes where categoryId = ${idCFind} AND bedroom = ${quantityBedroom} AND bathroom = ${quantityBathroom}`);
            }
            if (!idCFind && addressFind) {
                homes = await this.homeRepository.query(`select * from homes where address like '%${addressFind}%' AND bedroom = ${quantityBedroom} AND bathroom = ${quantityBathroom}`);
            }
            return homes;
        };
        this.findById = async (id) => {
            return await this.homeRepository.query(`select *
                                                from homes where id = ${id}`);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.homeRepository = data_source_1.AppDataSource.getRepository(homes_1.Homes);
        });
    }
}
exports.HomeService = HomeService;
//# sourceMappingURL=homeService.js.map