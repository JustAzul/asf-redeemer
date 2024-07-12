import { IMapper } from 'src/shared/repositories/interfaces/mapper.interface';
import { AppData } from 'src/steam-app/dto/steam-app-details.dto';
import {
  SteamAppEntity,
  SteamAppProps,
  SteamAppType,
} from 'src/steam-app/entities/steam-app.entity';

export abstract class ISteamAppApiMapper implements IMapper<SteamAppEntity> {
  abstract toEntity(appData: AppData): SteamAppEntity;
}

export class SteamAppApiMapper extends ISteamAppApiMapper {
  toEntity({ steam_appid, name, type }: AppData): SteamAppEntity {
    const props: SteamAppProps = {
      app_id: steam_appid,
      name: name,
      type: type === 'game' ? SteamAppType.GAME : SteamAppType.DLC,
    };

    return new SteamAppEntity(props);
  }
}
