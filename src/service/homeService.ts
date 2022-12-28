import {AppDataSource} from "../data-source";
import {Homes} from "../model/homes";

export class HomeService {
    private homeRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.homeRepository = AppDataSource.getRepository(Homes);
        })
    }

    getAll = async () => {
        return await this.homeRepository.query(`select *
                                                from homes`)
    }

    createHome = async (home) => {
        let homeC = await this.homeRepository.save(home);
        return homeC
    }

    findHomes = async (idCFind, addressFind, quantityBedroom, quantityBathroom) => {
        let homes
        if (idCFind && addressFind) {
            homes = await this.homeRepository.query(`select * from homes where categoryId = ${idCFind} AND address like '%${addressFind}%' AND bedroom = ${quantityBedroom} AND bathroom = ${quantityBathroom}`)
        }
        if (idCFind && !addressFind) {
            homes = await this.homeRepository.query(`select * from homes where categoryId = ${idCFind} AND bedroom = ${quantityBedroom} AND bathroom = ${quantityBathroom}`)
        }
        if (!idCFind && addressFind) {
            homes = await this.homeRepository.query(`select * from homes where address like '%${addressFind}%' AND bedroom = ${quantityBedroom} AND bathroom = ${quantityBathroom}`)
        }
        return homes
    }

    findById = async (id) => {
        return await this.homeRepository.query(`select *
                                                from homes where id = ${id}`)
    }
}