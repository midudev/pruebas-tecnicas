import { act, renderHook } from '@testing-library/react';
import useLocalStorage from '../../hook/useLocalStorage';

describe('useLocalStorage', () => {

  // Limpia el localStorage después de cada prueba
  afterEach(() => {
    localStorage.clear();
  });

  test('Retorna el initialState cuando no hay ningún valor en el localStorage', () => {

    const { result } = renderHook(() =>
      useLocalStorage('test', 'initialState')
    );

    const [storedValue] = result.current;

    expect(storedValue).toBe('initialState');
  });

  test('Usa el valor almacenado en el localStorage cuando éste existe', () => {

    localStorage.setItem('test', JSON.stringify('valor almacenado'));

    const { result } = renderHook(() =>
      useLocalStorage('test', 'initialState')
    );

    const [storedValue] = result.current;

    expect(storedValue).toBe('valor almacenado');
  });

  test('La función setValue actualiza correctamente el valor en el estado y en el localStorage', () => {

    const { result } = renderHook(() => useLocalStorage('test', ''));

    // Actúa sobre el hook llamando a la función setValue con el valor 'test value'
    act(() => {
      result.current[1]('test value');
    });

    // Verifica que el valor almacenado en el state sea igual a 'test value'
    expect(result.current[0]).toBe('test value');

    // Verifica que el valor almacenado en localStorage sea igual a 'test value'
    expect(localStorage.getItem('test')).toBe(JSON.stringify('test value'));
  });
});
