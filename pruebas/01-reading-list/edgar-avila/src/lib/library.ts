import { writable } from 'svelte/store';
const isBrowser = typeof window !== 'undefined';

export const getLibraryFromLocalStorage = () => {
	if (isBrowser) {
		const library = localStorage.getItem('library');
		if (library) {
			return new Set(JSON.parse(library));
		}
		return new Set();
	}
	return new Set();
};

export const librarySet = writable(getLibraryFromLocalStorage());

let updateLocalStorage = true;

if (isBrowser) {
	window.addEventListener('storage', (event) => {
		if (event.key === 'library') {
      updateLocalStorage = false;
			librarySet.set(getLibraryFromLocalStorage());
		}
	});
}

librarySet.subscribe((val) => {
	if (isBrowser) {
    if(updateLocalStorage) {
      localStorage.setItem('library', JSON.stringify(Array.from(val)));
    }
    updateLocalStorage = true;
	}
});
