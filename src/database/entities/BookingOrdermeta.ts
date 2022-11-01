import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("booking_ordermeta", { schema: "puntotod_web" })
export class BookingOrdermeta {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "order_id" })
  orderId: number;

  @Column("text", { name: "meta_key", nullable: true })
  metaKey: string | null;

  @Column("text", { name: "meta_value", nullable: true })
  metaValue: string | null;
}
