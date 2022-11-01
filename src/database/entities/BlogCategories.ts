import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("blog_categories", { schema: "puntotod_web" })
export class BlogCategories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "category", nullable: true, length: 30 })
  category: string | null;
}
