import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("operators", { schema: "puntotod_web" })
export class Operators {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "username", length: 100 })
  username: string;

  @Column("varchar", { name: "pass", length: 100 })
  pass: string;

  @Column("varchar", { name: "first_name", length: 100 })
  firstName: string;

  @Column("varchar", { name: "last_name", length: 100 })
  lastName: string;

  @Column("varchar", { name: "email", length: 100 })
  email: string;

  @Column("datetime", { name: "reg_date" })
  regDate: Date;

  @Column("varchar", {
    name: "status",
    length: 30,
    default: () => "'inactivo'",
  })
  status: string;
}
