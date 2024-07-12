import { SteamPackageDetails } from 'src/steam-package/entities/steam-package.entity';

export abstract class ISteamPackageDetailsRepository {
  abstract fetchDetails(packageIds: string[]): Promise<SteamPackageDetails[]>;
}
