import { describe, expect, it } from 'vitest';
import { getBooks } from './getBooks';
import { library } from '../../../books.json';

describe('getBooks', () => {
  it('should return the library', () => {
    expect(getBooks()).toEqual(library);
  });
});
