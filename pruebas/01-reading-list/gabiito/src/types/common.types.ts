import { IconType } from "react-icons";

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export type TypeWithKey<T> = {
  [key: string]: T;
}

export enum OrderDirection {
  UP = 'UP',
  DOWN = 'DOWN',
}

export type Filter = TypeWithKey<string>;

export enum FilterType {
  GENRE = 'genero',
  SEARCH = 'busqueda',
}

export const ALL_GENRES = 'All';