import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("subscriptors", { schema: "puntotod_web" })
export class Subscriptors {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "full_name", length: 100 })
  fullName: string;

  @Column("varchar", { name: "email", length: 100 })
  email: string;

  @Column("datetime", { name: "reg_date" })
  regDate: Date;

  @Column("varchar", { name: "status", length: 50 })
  status: string;
}
