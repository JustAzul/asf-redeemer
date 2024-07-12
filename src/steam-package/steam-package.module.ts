import { Module, Provider } from '@nestjs/common';
import { ISteamPackageDetailsRepository } from './repositories/interface/steam-package-details.interface';
import {
  ISteamAppApiMapper,
  SteamAppApiMapper,
} from './repositories/mappers/steam-package-details.mapper';
import { SteamPackageDetailsRepository } from './repositories/steam-package-details.repository';

const ISteamPackageDetailsRepositoryProvider: Provider = {
  provide: ISteamPackageDetailsRepository,
  useClass: SteamPackageDetailsRepository,
};

const SteamPackageProviders: Provider[] = [
  ISteamPackageDetailsRepositoryProvider,
  { provide: ISteamAppApiMapper, useClass: SteamAppApiMapper },
];

@Module({
  exports: [ISteamPackageDetailsRepositoryProvider],
  providers: SteamPackageProviders,
})
export class SteamPackageModule {}
