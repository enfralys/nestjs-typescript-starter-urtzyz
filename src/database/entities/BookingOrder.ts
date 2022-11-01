import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("booking_order", { schema: "puntotod_web" })
export class BookingOrder {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "customer_id" })
  customerId: number;

  @Column("int", { name: "doctor_id" })
  doctorId: number;

  @Column("varchar", { name: "status", nullable: true, length: 20 })
  status: string | null;

  @Column("datetime", { name: "order_date", nullable: true })
  orderDate: Date | null;
}
