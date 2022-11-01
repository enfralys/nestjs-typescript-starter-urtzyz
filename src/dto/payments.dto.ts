import { Expose } from 'class-transformer';
import { IsEmpty, IsNotEmpty } from 'class-validator';
export class PaymentsDTO {
      @Expose()
      id: number;
      @Expose()
      name: string;
      @Expose()
      lastName: string;
      @Expose()
      @IsNotEmpty()
      userId: number;
      @Expose()
      document: string;
      @Expose()
      @IsNotEmpty()
      bank: string;
      @Expose()
      @IsNotEmpty()
      refNumber: string;
      @Expose()
      @IsNotEmpty()
      mount: string;
      @Expose()
      @IsNotEmpty()
      points: string;
      @Expose()
      imageUrl: string;
      @Expose()
      notes: string;
      @Expose()
      date: Date;

}