import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("especialidades_especialidad_fulltext", ["especialidad"], {
  fulltext: true,
})
@Entity("especialidades", { schema: "puntotod_web" })
export class Especialidades {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "especialidad", length: 300 })
  especialidad: string;

  @Column("varchar", { name: "masculino", length: 300 })
  masculino: string;

  @Column("varchar", { name: "femenino", length: 300 })
  femenino: string;

  @Column("int", { name: "is_directorio", default: () => "'0'" })
  isDirectorio: number;

  @Column("int", { name: "is_belleza", default: () => "'0'" })
  isBelleza: number;
}
