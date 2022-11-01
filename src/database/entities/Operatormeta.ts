import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("operatormeta", { schema: "puntotod_web" })
export class Operatormeta {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "operator_id" })
  operatorId: number;

  @Column("text", { name: "meta_key" })
  metaKey: string;

  @Column("text", { name: "meta_value" })
  metaValue: string;
}
