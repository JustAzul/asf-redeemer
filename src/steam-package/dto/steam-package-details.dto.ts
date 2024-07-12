export interface SteamPackageDetailsResponse {
  [key: string]: PackageDetail;
}

export interface PackageDetail {
  data: PackageData;
  success: boolean;
}

export interface PackageData {
  apps: PackageApp[];
  controller: PackageController;
  header_image: string;
  name: string;
  page_image: string;
  platforms: PackagePlatforms;
  price: PackagePrice;
  release_date: ReleaseDate;
  small_logo: string;
}

export interface PackageApp {
  id: number;
  name: string;
}

export interface PackagePrice {
  currency: string;
  discount_percent: number;
  final: number;
  individual: number;
  initial: number;
}

export interface PackagePlatforms {
  linux: boolean;
  mac: boolean;
  windows: boolean;
}

export interface PackageController {
  full_gamepad: boolean;
}

export interface ReleaseDate {
  coming_soon: boolean;
  date: string;
}
