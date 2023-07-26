import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import List from './list';

describe('Given the component List', () => {
	describe('When it renders', () => {
		beforeEach(() => {
			render(
				<Provider store={store}>
					<List></List>
				</Provider>
			);
		});
		test('Then a heading should be in the document', async () => {
			const element = await screen.findByRole('list');
			expect(element).toBeInTheDocument();
		});
	});
});
