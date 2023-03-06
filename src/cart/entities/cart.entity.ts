import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class CartEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'user_id', nullable: false })
  userId: number;

  @Column({ name: 'createdAt' })
  createAt: Date;

  @Column({ name: 'updatedAt' })
  updatedAt: Date;
}
