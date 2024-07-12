import axios from 'axios';
import { SteamAppDetailsResponse } from '../dto/steam-app-details.dto';
import { ISteamAppDetailsRepository } from './interface/steam-app-details.interface';

const STEAM_API_URL = 'https://store.steampowered.com/api/appdetails';

export class SteamAppDetailsRepository implements ISteamAppDetailsRepository {
  async fetchDetails(appIds: string[]): Promise<SteamAppDetailsResponse> {
    try {
      const response = await axios.get<SteamAppDetailsResponse>(STEAM_API_URL, {
        params: { appids: appIds.join(',') },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch app details: ${error.message}`);
    }
  }
}
