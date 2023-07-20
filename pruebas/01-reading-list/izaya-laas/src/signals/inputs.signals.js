import { effect } from '@preact/signals';
import { signal } from '@preact/signals';
import { currentPath } from './store';

const initialFilterOptions = {
	specificBook: '',
	genre: 'any',
	pages: ['', ''],
	excludeBooks: false,
};

export const filterOptions = signal(initialFilterOptions);

//Tipo de rangos
const ranges = {
	min: 0,
	max: 1,
};

//HandlesChangesInputs de los filtros
export const handleSpecificBook = (e) => {
	filterOptions.value = {
		...filterOptions.value,
		specificBook: e.target.value,
	};
};
export const handleGenre = (e) => {
	filterOptions.value = {
		...filterOptions.value,
		genre: e.target.value,
	};
};
export const handleRangePages = (e, rangeName) => {
	const value = e.target.value;

	if (isNaN(Number(value))) {
		e.target.value = value.replace(new RegExp(/\D/, 'g'), '');
		return;
	}

	const newRangePages = [...filterOptions.value.pages];
	newRangePages[ranges[rangeName]] = value;

	filterOptions.value = { ...filterOptions.value, pages: newRangePages };
};
export const handleExcludeBooks = (e) => {
	filterOptions.value = {
		...filterOptions.value,
		excludeBooks: e.target.checked,
	};
};

effect(() => {
	//especificamos que el efecto actue cuando currentPath cambie
	currentPath.value;

	//Al cambiar de pagina reiniciamos las opciones en su estado basico
	filterOptions.value = initialFilterOptions;
});
