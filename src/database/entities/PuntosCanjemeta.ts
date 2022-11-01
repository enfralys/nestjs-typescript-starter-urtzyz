import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("puntos_canjemeta", { schema: "puntotod_web" })
export class PuntosCanjemeta {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "canje_id" })
  canjeId: number;

  @Column("text", { name: "meta_key" })
  metaKey: string;

  @Column("text", { name: "meta_value" })
  metaValue: string;
}
