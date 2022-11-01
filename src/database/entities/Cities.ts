import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cities", { schema: "puntotod_web" })
export class Cities {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "city", length: 30 })
  city: string;

  @Column("int", { name: "state" })
  state: number;
}
