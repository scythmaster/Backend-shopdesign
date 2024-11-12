import { Document, Model } from "mongoose";

export abstract class BaseRepository<T extends Document> {
    constructor(private model: Model<T>){}
 
    async create(data: Partial<T>): Promise<T> {
        const document = new this.model(data);
        return await document.save();
      }
    
      async findById(id: string): Promise<T | null> {
        return await this.model.findById(id).exec();
      }
    
      async findAll(query: object = {}): Promise<T[]> {
        return await this.model.find(query).exec();
      }
    
      async updateById(id: string, data: Partial<T>): Promise<T | null> {
        return await this.model.findByIdAndUpdate(id, data, { new: true }).exec();
      }
    
      async deleteById(id: string): Promise<T | null> {
        return await this.model.findByIdAndDelete(id).exec();
      }

    // abstract findAll(limit: number, skip: number): Promise<T[]>;
    // abstract findById(id: string): Promise<T | null>;
    // abstract create(entity: T): Promise<T>;
    // abstract update(id: string, entity: T): Promise<T | null>;
    // abstract delete(id: string): Promise<void>;
}
