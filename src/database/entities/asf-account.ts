import { PrimaryGeneratedColumn, Column, Entity, OneToMany, Relation } from 'typeorm';
import { GameOwnership } from './game-ownership';

@Entity('asf_account')
export class AsfAccount {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username!: string;

  @OneToMany(() => GameOwnership, (gameOwnership) => gameOwnership.asfAccount)
  gameOwnership!: Relation<GameOwnership>[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;
}
