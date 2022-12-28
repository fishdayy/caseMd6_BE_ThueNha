export declare class HomeService {
    private homeRepository;
    constructor();
    getAll: () => Promise<any>;
    createHome: (home: any) => Promise<any>;
    findHomes: (idCFind: any, addressFind: any, quantityBedroom: any, quantityBathroom: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
}
