import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("operator_permissions", { schema: "puntotod_web" })
export class OperatorPermissions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "label", length: 100 })
  label: string;

  @Column("varchar", { name: "keyword", length: 100 })
  keyword: string;

  @Column("varchar", { name: "menu_group", length: 100 })
  menuGroup: string;

  @Column("varchar", { name: "status", length: 20 })
  status: string;

  @Column("varchar", { name: "title", length: 100 })
  title: string;
}
