import { IApiRepository } from 'src/shared/repositories/interfaces/repository.interface';
import { SteamApp } from 'src/steam-app/entities/steam-app.entity';

export abstract class ISteamAppDetailsRepository
  implements IApiRepository<SteamApp[]>
{
  abstract fetchDetails(ids: string[]): Promise<SteamApp[]>;
}
