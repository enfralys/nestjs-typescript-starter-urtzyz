import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("reportes_de_pagometa", { schema: "puntotod_web" })
export class ReportesDePagometa {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "reporte_id" })
  reporteId: number;

  @Column("mediumtext", { name: "meta_key" })
  metaKey: string;

  @Column("text", { name: "meta_value" })
  metaValue: string;
}
