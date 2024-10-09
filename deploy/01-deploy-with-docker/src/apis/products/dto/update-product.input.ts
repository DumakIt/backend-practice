import { InputType, OmitType, PartialType, PickType } from '@nestjs/graphql';
import { CreateProductInput } from './create-product.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  // 아래의 내용들을 상속 받음
  // name?:string
  // description?:string
  // price?:number
}

// PickType(CreateProductInput, ['name', 'price']); // 뽑기
// OmitType(CreateProductInput, ['name', 'price']); // 빼기
// PartialType(CreateProductInput); // 있어도 되고 없어도 됨
