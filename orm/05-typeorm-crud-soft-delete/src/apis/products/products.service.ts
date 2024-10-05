import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ICreateServiceCreate,
  IProductsServiceCheckout,
  IProductsServiceFindOne,
  IProductsServiceUpdate,
} from './interfaces/products-service.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({ where: { id: productId } });
  }

  create({ createProductInput }: ICreateServiceCreate): Promise<Product> {
    const result = this.productsRepository.save({
      ...createProductInput,

      // 하나 하나 직접 나영하는 방식
      // name: '마우스',
      // description: '좋은 마우스',
      // price: 3000,
    });

    // result 안에는 무엇이 있을까?
    // result = {
    //  id:"dasdasd=dsadasd"
    //  name: "마우스"
    // description: '좋은 마우스',
    // price: 3000,
    return result;
  }

  async update({
    productId,
    updateProductInput,
  }: IProductsServiceUpdate): Promise<Product> {
    // 기존 있는 내용 재사용
    const product = await this.findOne({ productId });

    // 검증은 서비스에서 한다
    this.checkSoldout({ product });

    // this.productsRepository.create(); // DB 접속이랑 관련 없음. 등록을 위해서 빈 껍데기 객체 만들기 위함
    // this.productsRepository.update(); // 결과를 객체로 못 돌려받는 수정 방법
    // this.productsRepository.insert(); // 결과는 객체로 못 돌려 받는 등록 방법

    const result = this.productsRepository.save({
      ...product, // 수정 후, 수정되지 않은 다른 결과값까지 모두 객체로 리턴해주기 위해서
      ...updateProductInput,
    });

    return result;
  }

  // checkSoldout을 함수로 만드는 이유 => 수정, 삭제시 등 같은 검증 로직 사용
  checkSoldout({ product }: IProductsServiceCheckout): void {
    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }

    // if (product.isSoldout) {
    //   throw new HttpException(
    //     '이미 판매 완료된 상품입니다.',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }
  }

  async delete({ productId }: IProductsServiceDelete): Promise<boolean> {
    // 1. 실제 삭제
    // const result = await this.productsRepository.delete({ id: productId });
    // return result.affected ? true : false;

    // 2. 소프트 삭제(직접 구햔) - isDeleted
    // this.productsRepository.update({id:productId},{isDeleted: true})

    // 3. 소프트 삭제(직접 구햔) - deletedAt
    // this.productsRepository.update({id:productId}, {deletedAt: new Date()})

    // 4. 소프트 삭제(TypeORM 제공) = softRemove
    // this.productsRepository.softRemove({ id: productId });
    // 장점: 여러ID 한번에 지우기 가능 .softRemove([{id:qqq}, {id:aaa}, {id:zzz}])
    // 단점: id로만 삭제 가능

    // 5. 소프트 삭제(TypeORM 제공) = softDelete
    const result = await this.productsRepository.softDelete({ id: productId });
    // 장점: 다른 컬럼으로도 삭제 가능
    // 단점: 여러ID 한번에 지우기 불가능
    return result.affected ? true : false;

    // TypeORM에서 제공 해주는거 사용시 다른 API 부를때 조건을 안달아도 자동으로 안가지고 옴
  }
}

export interface IProductsServiceDelete {
  productId: string;
}
