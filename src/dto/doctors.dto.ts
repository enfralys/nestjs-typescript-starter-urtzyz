import { Expose } from 'class-transformer';
export class DoctorsDTO {
      @Expose()
      firstName: string;
      @Expose()
      lastName: string;
      @Expose()
      sex: string;
      @Expose()
      document: string;
      @Expose()
      email: string;
      @Expose()
      productTitle: string;
      @Expose()
      productImg: string;
      @Expose()
      creationDate: string;
      @Expose()
      slug: string;
      @Expose()
      id: number;
      @Expose()
      published: number;
      @Expose()
      typeUser: number;
      @Expose()
      onlineOffice: number;
      @Expose()
      visitor: number;
}
