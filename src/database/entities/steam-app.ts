import { SteamAppType } from 'src/steam-app/entities/steam-app.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AppHistory } from './app-history';
import { SteamSub } from './steam-sub';

@Entity('steam_app')
export class SteamApp {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  app_id!: number;

  @Column({ unique: true })
  name!: string;

  @OneToMany(() => AppHistory, (appHistory) => appHistory.app)
  appHistory!: AppHistory[];

  @OneToMany(() => SteamSub, (steamSub) => steamSub.apps)
  steamPackages!: SteamSub[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @Column({ type: 'enum', enum: SteamAppType })
  type!: SteamAppType;
}
