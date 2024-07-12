import { Module, Provider } from '@nestjs/common';

import { ISteamAppDetailsRepository } from './repositories/interface/steam-app-details.interface';
import {
  ISteamAppApiMapper,
  SteamAppApiMapper,
} from './repositories/mappers/steam-app-details.mapper';
import { SteamAppDetailsRepository } from './repositories/steam-app-details.repository';

const ISteamAppDetailsRepositoryProvider: Provider = {
  provide: ISteamAppDetailsRepository,
  useClass: SteamAppDetailsRepository,
};

const SteamAppProviders: Provider[] = [
  ISteamAppDetailsRepositoryProvider,
  { provide: ISteamAppApiMapper, useClass: SteamAppApiMapper },
];

@Module({
  exports: [ISteamAppDetailsRepositoryProvider],
  providers: SteamAppProviders,
})
export class SteamAppModule {}
