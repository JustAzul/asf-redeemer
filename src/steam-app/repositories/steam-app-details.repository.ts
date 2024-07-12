import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { SteamAppDetailsResponse } from '../dto/steam-app-details.dto';
import { SteamAppEntity } from '../entities/steam-app.entity';

import { ISteamAppDetailsRepository } from './interface/steam-app-details.interface';
import { ISteamAppApiMapper } from './mappers/steam-app-details.mapper';

const STEAM_API_URL = 'https://store.steampowered.com/api/appdetails';

@Injectable()
export class SteamAppDetailsRepository implements ISteamAppDetailsRepository {
  constructor(private readonly mapper: ISteamAppApiMapper) {}

  async fetchDetails(appIds: string[]): Promise<SteamAppEntity[]> {
    try {
      const { data } = await axios.get<SteamAppDetailsResponse>(STEAM_API_URL, {
        params: { appids: appIds.join(',') },
      });

      const apps = Object.keys(data).map((key) => data[key]);
      return apps.map(({ data }) => this.mapper.toEntity(data));
    } catch (error) {
      throw new Error(`Failed to fetch app details: ${error.message}`);
    }
  }
}
