import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("customer_usermeta", { schema: "puntotod_web" })
export class CustomerUsermeta {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("text", { name: "meta_key" })
  metaKey: string;

  @Column("text", { name: "meta_value" })
  metaValue: string;
}
