export const CATEGORIES = {
  LAPTOPS: 'laptops',
  SMARTPHONES: 'smartphones',
  HOME_DECORATION: 'home-decoration',
  SKINCARE: 'skincare',
  FRAGRANCES: 'fragrances',
  GROCERIES: 'groceries',
} as const;

export type Category = (typeof CATEGORIES)[keyof typeof CATEGORIES];

export const CATEGORIES_BADGE_CLASSES = {
  [CATEGORIES.LAPTOPS]: 'badge-primary',
  [CATEGORIES.SMARTPHONES]: 'badge-info',
  [CATEGORIES.HOME_DECORATION]: 'badge-success',
  [CATEGORIES.SKINCARE]: 'badge-error',
  [CATEGORIES.FRAGRANCES]: 'badge-warning',
  [CATEGORIES.GROCERIES]: 'badge-accent',
} as const;
