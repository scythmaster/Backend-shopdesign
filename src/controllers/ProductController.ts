import { Post } from 'routing-controllers';
import { ProductService } from '../services/ProductService';
import { LogFunctionCall } from '../decorators/logger-decorator';
import { IProduct } from '../models/product';
import { ModifiedPathsSnapshot, Document, Model, Types, ClientSession, DocumentSetOptions, QueryOptions, MergeType, UpdateQuery, AnyObject, PopulateOptions, Query, SaveOptions, ToObjectOptions, FlattenMaps, UpdateWithAggregationPipeline, pathsToSkip, Error } from 'mongoose';

@LogFunctionCall()
export class ProductController {
    constructor(private productService: ProductService) {}
    @Post()
    async createProduct() {
        const product: any = {
            name: 'Tshirt',
            price: '900',
            description: 'Tshirt',
            category: 'clothing',
            image: '/svg',
            quantity: '10',
            createdAt: new Date(),
            modifiedAt: null,
            discount: 0,
            _id: undefined,
        }
        return this.productService.createProduct(product);
    }
}
