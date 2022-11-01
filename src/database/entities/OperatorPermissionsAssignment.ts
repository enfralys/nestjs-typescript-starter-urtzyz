import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("operator_permissions_assignment", { schema: "puntotod_web" })
export class OperatorPermissionsAssignment {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "operator_id" })
  operatorId: number;

  @Column("varchar", { name: "keyword", length: 100 })
  keyword: string;

  @Column("int", { name: "permission" })
  permission: number;
}
