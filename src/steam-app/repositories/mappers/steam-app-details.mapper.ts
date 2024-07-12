import { IMapper } from 'src/shared/repositories/interfaces/mapper.interface';
import { AppData } from 'src/steam-app/dto/steam-app-details.dto';
import {
  SteamApp,
  SteamAppProps,
  SteamAppType,
} from 'src/steam-app/entities/steam-app.entity';

export abstract class ISteamAppApiMapper implements IMapper<SteamApp> {
  abstract toEntity(appData: AppData): SteamApp;
}

export class SteamAppApiMapper extends ISteamAppApiMapper {
  toEntity({ steam_appid, name, type }: AppData): SteamApp {
    const props: SteamAppProps = {
      app_id: steam_appid,
      name: name,
      type: type === 'game' ? SteamAppType.GAME : SteamAppType.DLC,
    };

    return new SteamApp(props);
  }
}
