import {
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  Entity,
  Relation,
} from 'typeorm';
import { SteamApp } from './steam-app';
import { AsfAccount } from './asf-account';

@Entity('game_ownership')
export class GameOwnership {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  ownershipStatus!: boolean;

  @OneToOne(() => SteamApp, (app) => app.appHistory)
  @JoinColumn({ name: 'steam_app_id' })
  app!: Relation<SteamApp>;

  @OneToOne(() => AsfAccount, (asfAccount) => asfAccount.gameOwnership)
  @JoinColumn({ name: 'asf_account_id' })
  asfAccount!: Relation<AsfAccount>;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;
}
