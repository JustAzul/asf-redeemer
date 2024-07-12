import { SteamPackageDetailsResponse } from 'src/steam-package/dto/steam-package-details.dto';

export abstract class ISteamPackageDetailsRepository {
  abstract fetchDetails(ids: string[]): Promise<SteamPackageDetailsResponse>;
}
