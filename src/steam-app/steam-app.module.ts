import { Module, Provider } from '@nestjs/common';
import { ISteamAppDetailsRepository } from './repositories/interface/steam-app-details.interface';
import { SteamAppDetailsRepository } from './repositories/steam-app-details.repository';
import {
  ISteamAppApiMapper,
  SteamAppApiMapper,
} from './repositories/mappers/steam-app-details.mapper';

const ISteamAppDetailsRepositoryProvider: Provider = {
  provide: ISteamAppDetailsRepository,
  useClass: SteamAppDetailsRepository,
};

const SteamAppProviders: Provider[] = [
  ISteamAppDetailsRepositoryProvider,
  { provide: ISteamAppApiMapper, useClass: SteamAppApiMapper },
];

@Module({
  providers: SteamAppProviders,
  exports: [ISteamAppDetailsRepositoryProvider],
})
export class SteamAppModule {}
