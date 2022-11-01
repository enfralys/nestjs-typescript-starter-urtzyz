/* eslint-disable prettier/prettier */
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('doctors_product_title_fulltext', ['productTitle'], { fulltext: true })
@Entity('doctors', { schema: 'puntotod_web' })
export class Doctors {
      @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
      id: number;

      @Column('varchar', { name: 'first_name', length: 100 })
      firstName: string;

      @Column('varchar', { name: 'last_name', length: 100 })
      lastName: string;

      @Column('varchar', { name: 'sex', length: 1 })
      sex: string;

      @Column('varchar', { name: 'document', length: 20, })
      document: string;

      @Column('varchar', { name: 'email', length: 100 })
      email: string;

      @Column('varchar', { name: 'pass', length: 100 })
      pass: string;

      @Column('varchar', { name: 'product_title', length: 100 })
      productTitle: string;

      @Column('varchar', { name: 'product_img', length: 30 })
      productImg: string;

      @Column('int', { name: 'published', default: () => "'0'" })
      published: number;

      @Column('int', { name: 'type_user', default: () => "'1'" })
      typeUser: number;

      @Column('int', { name: 'online_office', default: () => "'0'" })
      onlineOffice: number;

      @Column('int', { name: 'visitor' })
      visitor: number;

      @Column('datetime', { name: 'creation_date' })
      creationDate: Date;

      @Column('varchar', { name: 'slug', length: 30 })
      slug: string;
      @Column('varchar', { name: 'codeemail', length: 30 })
      codeemail: string;
}
