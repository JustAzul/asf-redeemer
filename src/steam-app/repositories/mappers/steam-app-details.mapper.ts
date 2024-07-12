import { IMapper } from 'src/shared/repositories/interfaces/mapper.interface';
import { SteamAppDetailsResponse } from 'src/steam-app/dto/steam-app-details.dto';
import {
  SteamAppEntity,
  SteamAppProps,
  SteamAppType,
} from 'src/steam-app/entities/steam-app.entity';

export abstract class ISteamAppApiMapper implements IMapper<SteamAppEntity> {
  abstract toEntity(response: SteamAppDetailsResponse): SteamAppEntity;
}

export class SteamAppApiMapper extends ISteamAppApiMapper {
  toEntity(response: SteamAppDetailsResponse): SteamAppEntity {
    const data = response[Object.keys(response)[0]].data;

    const props: SteamAppProps = {
      app_id: data.steam_appid,
      name: data.name,
      type: data.type === 'game' ? SteamAppType.GAME : SteamAppType.DLC,
    };

    return new SteamAppEntity(props);
  }

  toManyEntities(response: SteamAppDetailsResponse): SteamAppEntity[] {
    // return this.toEntity(response);
    //TODO: Implement this method
  }
}
