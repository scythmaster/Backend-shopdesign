import { Post } from 'routing-controllers';
import { ProductService } from '../services/ProductService';
import { LogFunctionCall } from '../logger/logger-decorator';

@LogFunctionCall()
export class ProductController {
    constructor(private productService: ProductService) {}
    @Post()
    async createProduct() {
        // await this.productService.
    }
}
