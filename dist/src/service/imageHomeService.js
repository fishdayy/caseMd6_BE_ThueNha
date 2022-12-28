"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageHomeService = void 0;
const data_source_1 = require("../data-source");
const imageUrls_1 = require("../model/imageUrls");
class ImageHomeService {
    constructor() {
        this.getAll = async () => {
            return await this.imageHomeRepository.query(`select *
                                                from image_urls`);
        };
        this.getImagesByHomeId = async (id) => {
            return await this.imageHomeRepository.query(`select *
                                                from image_urls where homeId = ${id}`);
        };
        this.createImageHome = async (imageUrl) => {
            let imageUrlC = await this.imageHomeRepository.save(imageUrl);
            return imageUrlC;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.imageHomeRepository = data_source_1.AppDataSource.getRepository(imageUrls_1.ImageUrls);
        });
    }
}
exports.ImageHomeService = ImageHomeService;
//# sourceMappingURL=imageHomeService.js.map