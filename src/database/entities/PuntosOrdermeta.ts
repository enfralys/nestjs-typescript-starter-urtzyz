import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("puntos_ordermeta", { schema: "puntotod_web" })
export class PuntosOrdermeta {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "order_id" })
  orderId: number;

  @Column("text", { name: "meta_key" })
  metaKey: string;

  @Column("text", { name: "meta_value" })
  metaValue: string;
}
