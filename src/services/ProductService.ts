import { ProductRepository } from '../repositories/ProductRepository';
import { IProduct, Product } from '../models/product';

export class ProductService {
    constructor(private productRepository: ProductRepository) {}

    async getAllProducts(): Promise<IProduct[]> {
        return Product.find();
    }

    async getProductById(id: string): Promise<IProduct | null> {
        return this.productRepository.findById(id);
    }

    async createProduct(product: IProduct): Promise<IProduct> {
        return this.productRepository.create(product);
    }

    // async updateProduct(id: string, product: IProduct): Promise<IProduct | null> {
    //     return this.productRepository.update(id, product);
    // }

    // async deleteProduct(id: string): Promise<void> {
    //     return this.productRepository.delete(id);
    // }
}
