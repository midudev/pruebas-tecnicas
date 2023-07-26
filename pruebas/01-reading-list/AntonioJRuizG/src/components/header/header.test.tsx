import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import Header from './header';
import BooksFilter from '../filter/books.filter';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

vi.mock('../filter/books.filter');

describe('Given the component Header', () => {
	describe('When it renders', () => {
		beforeEach(() => {
			render(
				<Provider store={store}>
					<Header></Header>
				</Provider>
			);
		});
		test('Then a heading should be in the document', async () => {
			const element = await screen.findByRole('heading');
			expect(element).toBeInTheDocument();
		});
		test('Then the component BooksFilter should have been called', () => {
			expect(BooksFilter).toHaveBeenCalled();
		});
	});
});
