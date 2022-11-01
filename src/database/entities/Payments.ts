
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity("payments", { schema: "puntotod_web" })
export class Payments {

      @PrimaryGeneratedColumn({ type: "int", name: "id" })
      id: number;

      @Column("varchar", { name: "name", length: 100 })
      name: string;

      @Column("varchar", { name: "last_name", length: 100 })
      lastName: string;

      @Column("int", { name: "user_id", default: () => "'0'" })
      userId: number;

      @Column("varchar", { name: "document", length: 100 })
      document: string;

      @Column("varchar", { name: "bank", length: 100 })
      bank: string;

      @Column("varchar", { name: "ref_number", length: 100 })
      refNumber: string;

      @Column("varchar", { name: "mount", length: 100 })
      mount: string;

      @Column("varchar", { name: "points", length: 100 })
      points: string;

      @Column("varchar", { name: "image_url", length: 100 })
      imageUrl: string;

      @Column("varchar", { name: "notes", length: 100 })
      notes: string;


}