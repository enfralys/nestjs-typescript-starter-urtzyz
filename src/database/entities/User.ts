import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_78a916df40e02a9deb1c4b75ed", ["username"], { unique: true })
@Entity("user", { schema: "puntotod_web" })
export class User {
      @PrimaryGeneratedColumn({ type: "int", name: "id" })
      id: number;

      @Column("varchar", { name: "username", unique: true, length: 255 })
      username: string;

      @Column("varchar", { name: "codeemail", unique: true, length: 255 })
      codeemail: string;

      @Column("varchar", { name: "email", unique: true, length: 255 })
      email: string;

      @Column('int', { name: 'type_user', default: () => "'1'" })
      typeUser: number;

      @Column("varchar", { name: "password", length: 255 })
      password: string;

      @Column("varchar", { name: "role", length: 255 })
      role: string;

      @Column("datetime", {
            name: "createdAt",
            default: () => "'CURRENT_TIMESTAMP(6)'",
      })
      createdAt: Date;

      @Column("datetime", {
            name: "updateAt",
            default: () => "'CURRENT_TIMESTAMP(6)'",
      })
      updateAt: Date;
}
