import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import BooksFilter from './books.filter';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Given the component BooksFilter', () => {
	describe('When it renders', () => {
		beforeEach(() => {
			render(
				<Provider store={store}>
					<BooksFilter></BooksFilter>
				</Provider>
			);
		});
		test('Then a heading element should be in the document', async () => {
			const element = await screen.findByRole('heading');
			expect(element).toBeInTheDocument();
		});
	});
});
