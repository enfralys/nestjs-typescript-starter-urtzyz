import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("blog_tags", { schema: "puntotod_web" })
export class BlogTags {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "tag", nullable: true, length: 30 })
  tag: string | null;
}
