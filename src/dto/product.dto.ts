import { Expose } from 'class-transformer';
export class ProductDTO {
  @Expose()
  companyName: string;
  @Expose()
  companyTitle: string;
  @Expose()
  document: string;
  @Expose()
  email: string;
  @Expose()
  logo: string;
  @Expose()
  creationDate: string;
  @Expose()
  published: number;
  @Expose()
  id: number;
  @Expose()
  visitor: number;
}
