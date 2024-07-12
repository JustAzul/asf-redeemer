export interface SteamAppDetailsResponse {
  [appID: string]: AppDetail;
}

export interface AppDetail {
  data: AppData;
  success: boolean;
}

export interface AppData {
  about_the_game: string;
  categories: Category[];
  detailed_description: string;
  developers: string[];
  genres: Genre[];
  header_image: string;
  is_free: boolean;
  name: string;
  platforms: AppPlatforms;
  price_overview?: PriceOverview;
  publishers: string[];
  release_date: ReleaseDate;
  required_age: number;
  steam_appid: number;
  supported_languages: string;
  type: string;
  website: string;
}

export interface PriceOverview {
  currency: string;
  discount_percent: number;
  final: number;
  initial: number;
}

export interface AppPlatforms {
  linux: boolean;
  mac: boolean;
  windows: boolean;
}

export interface Category {
  description: string;
  id: number;
}

export interface Genre {
  description: string;
  id: string;
}

export interface ReleaseDate {
  coming_soon: boolean;
  date: string;
}
