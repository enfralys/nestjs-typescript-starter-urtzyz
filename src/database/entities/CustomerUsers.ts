import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("customer_users", { schema: "puntotod_web" })
export class CustomerUsers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "first_name", length: 50 })
  firstName: string;

  @Column("varchar", { name: "last_name", length: 50 })
  lastName: string;

  @Column("varchar", { name: "pass", length: 255 })
  pass: string;

  @Column("varchar", { name: "email", length: 50 })
  email: string;

  @Column("varchar", { name: "phone", length: 20 })
  phone: string;

  @Column("varchar", { name: "sex", length: 20 })
  sex: string;

  @Column("datetime", { name: "user_registered" })
  userRegistered: Date;

  @Column("varchar", { name: "status", length: 20 })
  status: string;
}
