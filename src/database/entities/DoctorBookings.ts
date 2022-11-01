import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("doctor_bookings", { schema: "puntotod_web" })
export class DoctorBookings {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "doctor_id", nullable: true })
  doctorId: number | null;

  @Column("int", { name: "customer_id", nullable: true })
  customerId: number | null;

  @Column("datetime", { name: "booking_date", nullable: true })
  bookingDate: Date | null;

  @Column("int", { name: "order_id", nullable: true })
  orderId: number | null;

  @Column("date", { name: "insert_date", nullable: true })
  insertDate: string | null;

  @Column("int", {
    name: "suspend_times",
    nullable: true,
    default: () => "'0'",
  })
  suspendTimes: number | null;

  @Column("date", { name: "last_update_date", nullable: true })
  lastUpdateDate: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 20 })
  status: string | null;
}
