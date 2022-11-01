import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("settings", { schema: "puntotod_web" })
export class Settings {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "setting_key", nullable: true })
  settingKey: string | null;

  @Column("text", { name: "setting_value", nullable: true })
  settingValue: string | null;
}
