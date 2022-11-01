import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("productos_serviciosmeta", { schema: "puntotod_web" })
export class ProductosServiciosmeta {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "ps_id" })
  psId: number;

  @Column("text", { name: "meta_key", nullable: true })
  metaKey: string | null;

  @Column("text", { name: "meta_value", nullable: true })
  metaValue: string | null;
}
