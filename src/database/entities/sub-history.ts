import {
  PrimaryGeneratedColumn,
  OneToOne,
  Column,
  JoinColumn,
  Entity,
} from 'typeorm';
import { SteamSub } from './steam-sub';

@Entity('sub_history')
export class SubHistory {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => SteamSub, (steamSub) => steamSub.subHistory)
  @JoinColumn({ name: 'steam_sub_id' })
  steamSub!: SteamSub;

  @Column()
  url!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createadAt!: Date;
}
