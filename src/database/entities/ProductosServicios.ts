import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("productos_servicios", { schema: "puntotod_web" })
export class ProductosServicios {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "company_name", length: 100 })
  companyName: string;

  @Column("varchar", { name: "company_title", length: 100 })
  companyTitle: string;

  @Column("varchar", { name: "document", length: 20 })
  document: string;

  @Column("varchar", { name: "email", length: 100 })
  email: string;

  @Column("varchar", { name: "pass", length: 100 })
  pass: string;

  @Column("varchar", { name: "logo", length: 30 })
  logo: string;

  @Column("int", { name: "published", default: () => "'0'" })
  published: number;

  @Column("datetime", { name: "creation_date" })
  creationDate: Date;

  @Column("int", { name: "visitor", default: () => "'0'" })
  visitor: number;
}
