export const normalizeText = (text) => {
  if (typeof text !== 'string') throw new Error('The parameter Must be string');
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
