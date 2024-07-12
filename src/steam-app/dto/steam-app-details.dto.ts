export interface SteamAppDetailsResponse {
  [appID: string]: AppDetail;
}

export interface AppDetail {
  success: boolean;
  data: AppData;
}

export interface AppData {
  type: string;
  name: string;
  steam_appid: number;
  required_age: number;
  is_free: boolean;
  detailed_description: string;
  about_the_game: string;
  supported_languages: string;
  header_image: string;
  website: string;
  developers: string[];
  publishers: string[];
  price_overview?: PriceOverview;
  platforms: AppPlatforms;
  categories: Category[];
  genres: Genre[];
  release_date: ReleaseDate;
}

export interface PriceOverview {
  currency: string;
  initial: number;
  final: number;
  discount_percent: number;
}

export interface AppPlatforms {
  windows: boolean;
  mac: boolean;
  linux: boolean;
}

export interface Category {
  id: number;
  description: string;
}

export interface Genre {
  id: string;
  description: string;
}

export interface ReleaseDate {
  coming_soon: boolean;
  date: string;
}
