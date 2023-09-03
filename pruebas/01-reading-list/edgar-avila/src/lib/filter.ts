export type FilterType = 'title' | 'author' | 'genre' | 'year' | 'ISBN' | 'all' | 'library' | 'pages';

export const filters: FilterType[] = [
  'title',
  'author',
  'genre',
  'year',
  'ISBN',
  'all',
  'library',
  'pages',
]

export const filterSelect = [
  {
    label: 'Todos',
    value: 'all',
  },
  {
    label: 'Libreria',
    value: 'library',
  },
  {
    label: 'Titulo',
    value: 'title',
  },
  {
    label: 'Paginas',
    value: 'pages',
  },
  {
    label: 'Autor',
    value: 'author',
  },
  {
    label: 'Genero',
    value: 'genre',
  },
  {
    label: 'Año',
    value: 'year',
  },
  {
    label: 'ISBN',
    value: 'ISBN',
  },
];