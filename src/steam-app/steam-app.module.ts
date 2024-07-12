import { Module, Provider } from '@nestjs/common';
import { ISteamAppDetailsRepository } from './repositories/interface/steam-app-details.interface';
import { SteamAppDetailsRepository } from './repositories/steam-app-details.repository';
import {
  ISteamAppApiMapper,
  SteamAppApiMapper,
} from './repositories/mappers/steam-app-details.mapper';

const SteamAppProviders: Provider[] = [
  {
    provide: ISteamAppDetailsRepository,
    useClass: SteamAppDetailsRepository,
  },
  { provide: ISteamAppApiMapper, useClass: SteamAppApiMapper },
];

@Module({
  imports: [],
  providers: SteamAppProviders,
  exports: SteamAppProviders,
})
export class SteamAppModule {}
