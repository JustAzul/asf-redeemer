import { IMapper } from 'src/shared/repositories/interfaces/mapper.interface';

import { PackageData } from 'src/steam-package/dto/steam-package-details.dto';
import {
  SteamPackageDetails,
  SteamPackageProps,
} from 'src/steam-package/entities/steam-package.entity';

type toEntityProps = PackageData & { sub_id: number };

export abstract class ISteamAppApiMapper
  implements IMapper<SteamPackageDetails>
{
  abstract toEntity(packageData: toEntityProps): SteamPackageDetails;
}

export class SteamAppApiMapper extends ISteamAppApiMapper {
  toEntity(packageData: toEntityProps): SteamPackageDetails {
    const props: SteamPackageProps = {
      apps: packageData.apps.map((app) => {
        return {
          id: app.id,
          name: app.name,
        };
      }),
      name: packageData.name,
      sub_id: packageData.sub_id,
    };

    return new SteamPackageDetails(props);
  }
}
