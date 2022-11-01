import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("puntos_orders", { schema: "puntotod_web" })
export class PuntosOrders {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "puntos" })
  puntos: number;

  @Column("int", { name: "customer_user_id" })
  customerUserId: number;

  @Column("double", { name: "total_amount", precision: 22 })
  totalAmount: number;

  @Column("varchar", { name: "pay_method", length: 100 })
  payMethod: string;

  @Column("datetime", { name: "purchase_date" })
  purchaseDate: Date;

  @Column("varchar", { name: "order_status", length: 30 })
  orderStatus: string;
}
