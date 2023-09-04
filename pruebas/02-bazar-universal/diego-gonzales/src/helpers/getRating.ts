import { $ } from '@builder.io/qwik';

interface Rating {
  rating: number;
  maxRating?: number;
  startIcon?: string;
  emptyIcon?: string;
}

export const getRating = $(
  ({ rating, maxRating = 5, startIcon = '🧡', emptyIcon = '🤍' }: Rating) => {
    const roundedRating = Math.round(rating);

    const starts = startIcon.repeat(roundedRating);
    const empties = emptyIcon.repeat(maxRating - roundedRating);

    return `${starts}${empties}`;
  }
);
