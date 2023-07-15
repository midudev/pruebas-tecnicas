export const getRandomIndex = (min: number, max: number): number =>
  Math.floor((max - min + 1) * Math.random() + min);