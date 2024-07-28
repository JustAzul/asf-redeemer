import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { GameOwnership } from './game-ownership';

@Entity('asf_account')
export class AsfAccount {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username!: string;

  @OneToMany(() => GameOwnership, (gameOwnership) => gameOwnership.asfAccount)
  gameOwnership!: GameOwnership[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;
}
