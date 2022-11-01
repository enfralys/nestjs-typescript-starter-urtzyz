import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("chat_folder", { schema: "puntotod_web" })
export class ChatFolder {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "chat_id" })
  chatId: number;

  @Column("varchar", { name: "sended_by", length: 20 })
  sendedBy: string;

  @Column("text", { name: "img_content" })
  imgContent: string;

  @Column("datetime", { name: "send_date" })
  sendDate: Date;

  @Column("varchar", { name: "status", length: 20 })
  status: string;
}
