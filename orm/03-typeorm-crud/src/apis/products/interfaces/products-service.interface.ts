import { CreateProductInput } from '../dto/create-product.input';

export interface ICreateServiceCreate {
  createProductInput: CreateProductInput;
}

export interface IProductsServiceFindOne {
  productId: string;
}
