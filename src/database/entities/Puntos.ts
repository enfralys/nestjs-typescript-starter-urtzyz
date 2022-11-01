import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("puntos", { schema: "puntotod_web" })
export class Puntos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "puntos" })
  puntos: number;

  @Column("double", { name: "price", precision: 22 })
  price: number;

  @Column("varchar", { name: "coin", length: 20 })
  coin: string;
}
