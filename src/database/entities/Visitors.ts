import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("visitors", { schema: "puntotod_web" })
export class Visitors {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "full_name", length: 100 })
  fullName: string;
}
