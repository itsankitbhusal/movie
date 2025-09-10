export interface IPageParams {
  limit?: number;
  page?: number;
  quality?: "480p" | "720p" | "1080p" | "1080p.x265" | "2160p" | "3D" | "All";
  minimum_rating?: number;
  query_term?: string;
  genre?: string;
  sort_by?:
    | "title"
    | "year"
    | "rating"
    | "peers"
    | "seeds"
    | "download_count"
    | "like_count"
    | "date_added";
  order_by?: "desc" | "asc";
  with_rt_ratings?: boolean;
}

export interface IMovieList {
  movie_count: number;
  limit: number;
  page_number: number;
  movies: IMovie[];
}

export interface IMovieListResponse {
  status: string;
  status_message: string;
  data: IMovieList;
  "@meta": IMeta;
}

export interface IMeta {
  server_time: number;
  server_timezone: string;
  api_version: number;
  execution_time: string;
}

export interface IMovie {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  summary?: string;
  description_intro?: string;
  description_full: string;
  synopsis?: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state?: string;
  like_count?: number;
  date_uploaded?: string;
  date_uploaded_unix?: number;
  torrents: ITorrent[];
}

export interface ITorrent {
  url: string;
  hash: string;
  quality: string;
  type: string;
  is_repack: string;
  video_codec: string;
  bit_depth: string;
  audio_channels: string;
  seeds: number;
  peers: number;
  size: string;
  size_bytes: number;
  date_uploaded: string;
  date_uploaded_unix: number;
}

export interface IMovieDetailResponse {
  status: string;
  status_message: string;
  data: {
    movie: IMovie;
  };
  "@meta": IMeta;
}
