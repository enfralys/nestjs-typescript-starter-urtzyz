import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("chat_texts", { schema: "puntotod_web" })
export class ChatTexts {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "chat_id", default: () => "'0'" })
  chatId: number;

  @Column("varchar", { name: "sended_by", length: 20 })
  sendedBy: string;

  @Column("text", { name: "text_content" })
  textContent: string;

  @Column("datetime", { name: "send_date" })
  sendDate: Date;

  @Column("varchar", { name: "status", length: 20 })
  status: string;
}
