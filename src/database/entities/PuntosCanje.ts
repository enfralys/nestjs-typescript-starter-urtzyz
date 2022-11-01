import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("puntos_canje", { schema: "puntotod_web" })
export class PuntosCanje {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "doctor_id" })
  doctorId: number;

  @Column("int", { name: "puntos" })
  puntos: number;

  @Column("datetime", { name: "application_date" })
  applicationDate: Date;

  @Column("datetime", { name: "approval_date" })
  approvalDate: Date;

  @Column("varchar", { name: "status", length: 20 })
  status: string;
}
