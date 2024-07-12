import axios from 'axios';

import { SteamPackageDetails } from '../entities/steam-package.entity';
import { ISteamPackageApiMapper } from './mappers/steam-package-details.mapper';
import { SteamPackageDetailsResponse } from '../dto/steam-package-details.dto';
import { ISteamPackageDetailsRepository } from './interface/steam-package-details.interface';

const STEAM_API_URL = 'https://store.steampowered.com/api/packagedetails';

export class SteamPackageDetailsRepository
  implements ISteamPackageDetailsRepository
{
  constructor(private readonly mapper: ISteamPackageApiMapper) {}

  async fetchDetails(packageIds: string[]): Promise<SteamPackageDetails[]> {
    //TODO: error handling
    const { data } = await axios.get<SteamPackageDetailsResponse>(
      `${STEAM_API_URL}?packageids=${packageIds.join(',')}`,
    );

    return Object.entries(data).map(([appId, { data }]) =>
      this.mapper.toEntity({ ...data, sub_id: Number(appId) }),
    );
  }
}
