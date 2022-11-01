import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("blogs", { schema: "puntotod_web" })
export class Blogs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "category_id", nullable: true })
  categoryId: number | null;

  @Column("varchar", { name: "cover", nullable: true, length: 100 })
  cover: string | null;

  @Column("varchar", { name: "author", nullable: true, length: 100 })
  author: string | null;

  @Column("varchar", { name: "tags", nullable: true, length: 100 })
  tags: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 100 })
  title: string | null;

  @Column("varchar", { name: "slug", nullable: true, length: 100 })
  slug: string | null;

  @Column("text", { name: "resumen", nullable: true })
  resumen: string | null;

  @Column("text", { name: "content", nullable: true })
  content: string | null;

  @Column("int", { name: "visits", nullable: true })
  visits: number | null;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;

  @Column("datetime", { name: "published_date", nullable: true })
  publishedDate: Date | null;

  @Column("varchar", { name: "status", nullable: true, length: 50 })
  status: string | null;
}
