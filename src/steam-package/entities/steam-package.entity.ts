export interface SteamPackageProps {
  apps: PackageApp[];
  name: string;
  sub_id: number;
}

export class SteamPackageDetailsEntity {
  constructor(private readonly props: SteamPackageProps) {}

  get sub_id(): number {
    return this.props.sub_id;
  }

  get name(): string {
    return this.props.name;
  }

  get apps(): PackageApp[] {
    return this.props.apps;
  }
}

export interface PackageApp {
  id: number;
  name: string;
}
