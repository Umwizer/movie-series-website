interface ImportMetaEnv {
  readonly VITE_TMDB_API_KEY: string;
  readonly VITE_TMDB_API_TOKEN: string;
  readonly VITE_API_URL: string;
  readonly VITE_TMDB_IMAGE_URL:string

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
