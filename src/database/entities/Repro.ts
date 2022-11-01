import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("repro", { schema: "puntotod_web" })
export class Repro {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "order_item_id" })
  orderItemId: number;

  @Column("date", { name: "fecha_cancelacion" })
  fechaCancelacion: string;

  @Column("time", { name: "hora" })
  hora: string;

  @Column("tinyint", { name: "status", width: 1, default: () => "'1'" })
  status: boolean;
}
