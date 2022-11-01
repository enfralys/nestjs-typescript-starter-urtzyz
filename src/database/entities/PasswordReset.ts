import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("password_reset", { schema: "puntotod_web" })
export class PasswordReset {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "reset_pass_key", length: 30 })
  resetPassKey: string;

  @Column("varchar", { name: "user_type", length: 10 })
  userType: string;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("datetime", { name: "reset_date" })
  resetDate: Date;

  @Column("varchar", { name: "status", length: 20 })
  status: string;
}
