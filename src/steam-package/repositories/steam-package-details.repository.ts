import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { SteamPackageDetailsResponse } from '../dto/steam-package-details.dto';
import { SteamPackageDetails } from '../entities/steam-package.entity';

import { ISteamPackageDetailsRepository } from './interface/steam-package-details.interface';
import { ISteamPackageApiMapper } from './mappers/steam-package-details.mapper';

const STEAM_API_URL = 'https://store.steampowered.com/api/packagedetails';

@Injectable()
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
