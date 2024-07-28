import {
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
  Entity,
} from 'typeorm';
import { SteamApp } from './steam-app';

@Entity('app_history')
export class AppHistory {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => SteamApp, (app) => app.appHistory)
  @JoinColumn({ name: 'steam_app_id' })
  app!: SteamApp;

  @Column()
  url!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createadAt!: Date;
}
