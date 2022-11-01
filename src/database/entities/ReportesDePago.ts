import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("reportes_de_pago", { schema: "puntotod_web" })
export class ReportesDePago {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "order_id" })
  orderId: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("varchar", { name: "product_type", length: 30 })
  productType: string;

  @Column("mediumtext", { name: "date_reporte" })
  dateReporte: string;

  @Column("mediumtext", { name: "status" })
  status: string;
}
