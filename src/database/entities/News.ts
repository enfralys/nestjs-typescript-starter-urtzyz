import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("news", { schema: "puntotod_web" })
export class News {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "section", length: 30 })
  section: string;

  @Column("int", { name: "section_id" })
  sectionId: number;

  @Column("text", { name: "news_item" })
  newsItem: string;

  @Column("int", { name: "status" })
  status: number;

  @Column("datetime", { name: "date" })
  date: Date;
}
