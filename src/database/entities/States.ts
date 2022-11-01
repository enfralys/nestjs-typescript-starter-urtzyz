import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("states", { schema: "puntotod_web" })
export class States {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "state", length: 30 })
  state: string;
}
