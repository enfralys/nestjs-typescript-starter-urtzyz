import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("chat_sessions", { schema: "puntotod_web" })
export class ChatSessions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "customer_id", default: () => "'0'" })
  customerId: number;

  @Column("int", { name: "doctor_id", default: () => "'0'" })
  doctorId: number;

  @Column("datetime", { name: "start_date" })
  startDate: Date;

  @Column("datetime", { name: "end_date" })
  endDate: Date;

  @Column("varchar", { name: "status", length: 20 })
  status: string;

  @Column("int", { name: "order_id", default: () => "'0'" })
  orderId: number;

  @Column("varchar", { name: "product_type", length: 50 })
  productType: string;
}
