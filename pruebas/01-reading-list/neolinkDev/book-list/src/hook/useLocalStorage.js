import { useState, useEffect, useCallback } from 'react';

function useLocalStorage(key, initialValue) {

  // state inicial
  const [storedValue, setStoredValue] = useState(() => {
    // obtenemos lo que tiene localStorage
    const item = localStorage.getItem(key);

    // si item tiene algo parseamos y retornamos su valor, si resulta ser null, retornamos el initialSTate
    return item ? JSON.parse(item) : initialValue;
  });

  // Retornamos un nuevo estado con el valor actualizado, usamos un useCallback para que no se ejecute entre renders, solo cuando cambien `storedValue` y `key`.
  const setValue = useCallback(

    (value) => {
      
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      localStorage.setItem(key, JSON.stringify(valueToStore));
    },
    [storedValue, key]
  );

  // sincronización entre pestañas, mantiene actualizado el estado del componente en función de los cambios en el almacenamiento local
  useEffect(() => {

    const handleStorageChange = (e) => {

      if (e.key === key) {
        setValue(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, setValue]);

  return [storedValue, setValue];
}

export default useLocalStorage;
