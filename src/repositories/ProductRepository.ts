// import { IProduct } from '../models/product';
import { IProduct, Product } from '../models/product';
// import { BaseRepository } from './BaseRepository';/
// import { IProduct, Product } from '../models/product';

export class ProductRepository {
    // async findAll(limit: number, skip: number): Promise<IProduct[]> {
    //    return Product.find().limit(limit).skip(skip)
    // }

    // findById(id: string): Promise<IProduct | null> {
    //     throw new Error("Method not implemented.");
    // }
    async create(entity: IProduct): Promise<IProduct> {
        try{
            return (await (Product.create(entity))).save();
        } catch(e: any){
            throw new Error(e);
        }
        
    }
    // update(id: string, entity: IProduct): Promise<IProduct | null> {
    //     throw new Error("Method not implemented.");
    // }
    // delete(id: string): Promise<void> {
    //     throw new Error("Method not implemented.");
    // }
}
