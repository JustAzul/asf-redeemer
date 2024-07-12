import { ApiRepository } from 'src/shared/repositories/interfaces/repository.interface';
import { SteamAppEntity } from 'src/steam-app/entities/steam-app.entity';

export abstract class ISteamAppDetailsRepository
  implements ApiRepository<SteamAppEntity[]>
{
  abstract fetchDetails(ids: string[]): Promise<SteamAppEntity[]>;
}
