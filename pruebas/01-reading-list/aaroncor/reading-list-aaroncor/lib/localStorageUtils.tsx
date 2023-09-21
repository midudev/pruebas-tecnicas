import { ILibrery } from './interfaces';

export function setDataToLS(data: string) {
	localStorage.setItem('listado', data);
}

export function getDataToLS() {
	const result = localStorage.getItem('listado');
	if (result) return JSON.parse(result) as ILibrery;
	return { library: [] };
}
