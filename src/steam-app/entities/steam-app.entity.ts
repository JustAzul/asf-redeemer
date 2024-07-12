export enum SteamAppType {
  DLC = 'DLC',
  GAME = 'GAME',
}

export interface SteamAppProps {
  app_id: number;
  name: string;
  type: SteamAppType;
}

export class SteamAppEntity {
  constructor(private readonly props: SteamAppProps) {}

  get app_id(): number {
    return this.props.app_id;
  }

  get name(): string {
    return this.props.name;
  }

  get type(): SteamAppType {
    return this.props.type;
  }
}
