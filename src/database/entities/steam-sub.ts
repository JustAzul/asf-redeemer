import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { SteamApp } from './steam-app';
import { SubHistory } from './sub-history';

@Entity('steam_sub')
export class SteamSub {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @OneToMany(() => SteamApp, (steamApp) => steamApp.steamPackages)
  @JoinColumn({ name: 'steam_app_id' })
  apps!: Relation<SteamApp>[];

  @OneToMany(() => SubHistory, (subHistory) => subHistory.steamSub)
  subHistory!: Relation<SubHistory>[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;
}
