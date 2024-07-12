import { Module, Provider } from '@nestjs/common';

import { ISteamPackageDetailsRepository } from './repositories/interface/steam-package-details.interface';
import {
  ISteamPackageApiMapper,
  SteamPackageApiMapper,
} from './repositories/mappers/steam-package-details.mapper';
import { SteamPackageDetailsRepository } from './repositories/steam-package-details.repository';

const ISteamPackageDetailsRepositoryProvider: Provider = {
  provide: ISteamPackageDetailsRepository,
  useClass: SteamPackageDetailsRepository,
};

const SteamPackageProviders: Provider[] = [
  ISteamPackageDetailsRepositoryProvider,
  { provide: ISteamPackageApiMapper, useClass: SteamPackageApiMapper },
];

@Module({
  exports: [ISteamPackageDetailsRepositoryProvider],
  providers: SteamPackageProviders,
})
export class SteamPackageModule {}
