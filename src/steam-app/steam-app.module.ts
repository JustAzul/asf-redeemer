import { Module, Provider } from '@nestjs/common';
import { ISteamAppDetailsRepository } from './repositories/interface/steam-app-details.interface';
import { SteamAppDetailsRepository } from './repositories/steam-app-details.repository';

const SteamAppProviders: Provider[] = [
  {
    provide: ISteamAppDetailsRepository,
    useClass: SteamAppDetailsRepository,
  },
];

@Module({
  imports: [],
  providers: SteamAppProviders,
  exports: SteamAppProviders,
})
export class SteamAppModule {}
