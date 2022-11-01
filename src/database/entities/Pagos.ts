import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pagos", { schema: "puntotod_web" })
export class Pagos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "product_id" })
  productId: number;

  @Column("int", { name: "order_id" })
  orderId: number;

  @Column("float", { name: "amount", precision: 12 })
  amount: number;

  @Column("text", { name: "status" })
  status: string;
}
