import { it, describe, expect } from 'vitest';
import { normalizeText } from '../src/helpers/normalizeText';

describe('NormalizeText test', () => {
  it('Debera retornar un error si se envia un tipo diferente a string', () => {
    expect(() => normalizeText()).toThrow();
    expect(() => normalizeText({ la: 'dsadsa' })).toThrow();
  });

  it('Debera retornar un string vacio si el parametro es ""', () => {
    expect(normalizeText('')).toBe('');
  });

  it('Debera devolver el parametro normalizado', () => {
    expect(normalizeText('Ciencia Ficción')).toBe('Ciencia Ficcion');
    expect(normalizeText('ÍÍÍ')).toBe('III');
    expect(normalizeText('pingüinos')).toBe('pinguinos');
  });
});
