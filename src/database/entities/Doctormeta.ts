import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("doctormeta", { schema: "puntotod_web" })
export class Doctormeta {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "doctor_id" })
  doctorId: number;

  @Column("text", { name: "meta_key" })
  metaKey: string;

  @Column("text", { name: "meta_value" })
  metaValue: string;
}
