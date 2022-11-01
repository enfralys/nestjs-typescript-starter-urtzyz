import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("belleza_bienestarmeta", { schema: "puntotod_web" })
export class BellezaBienestarmeta {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "bb_id" })
  bbId: number;

  @Column("text", { name: "meta_key", nullable: true })
  metaKey: string | null;

  @Column("text", { name: "meta_value", nullable: true })
  metaValue: string | null;
}
