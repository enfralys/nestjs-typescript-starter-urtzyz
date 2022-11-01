import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("daily_visits_counter", { schema: "puntotod_web" })
export class DailyVisitsCounter {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("date", { name: "date" })
  date: string;

  @Column("int", { name: "counter" })
  counter: number;
}
