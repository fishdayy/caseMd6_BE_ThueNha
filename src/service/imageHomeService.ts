import {AppDataSource} from "../data-source";
import {ImageUrls} from "../model/imageUrls";

export class ImageHomeService {
    private imageHomeRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.imageHomeRepository = AppDataSource.getRepository(ImageUrls);
        })
    }

    getAll = async () => {
        return await this.imageHomeRepository.query(`select *
                                                from image_urls`)
    }

    getImagesByHomeId = async (id) => {
        return await this.imageHomeRepository.query(`select *
                                                from image_urls where homeId = ${id}`)
    }

    createImageHome = async (imageUrl) => {
        let imageUrlC = await this.imageHomeRepository.save(imageUrl);
        return imageUrlC
    }
}