import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("otros", { schema: "puntotod_web" })
export class Otros {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "group_id" })
  groupId: number;

  @Column("text", { name: "value_key" })
  valueKey: string;

  @Column("text", { name: "value" })
  value: string;
}
