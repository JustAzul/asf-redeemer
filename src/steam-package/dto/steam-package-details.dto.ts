export interface SteamPackageDetailsResponse {
  [key: string]: PackageDetail;
}

export interface PackageDetail {
  success: boolean;
  data: PackageData;
}

export interface PackageData {
  name: string;
  page_image: string;
  header_image: string;
  small_logo: string;
  apps: PackageApp[];
  price: PackagePrice;
  platforms: PackagePlatforms;
  controller: PackageController;
  release_date: ReleaseDate;
}

export interface PackageApp {
  id: number;
  name: string;
}

export interface PackagePrice {
  currency: string;
  initial: number;
  final: number;
  discount_percent: number;
  individual: number;
}

export interface PackagePlatforms {
  windows: boolean;
  mac: boolean;
  linux: boolean;
}

export interface PackageController {
  full_gamepad: boolean;
}

export interface ReleaseDate {
  coming_soon: boolean;
  date: string;
}
