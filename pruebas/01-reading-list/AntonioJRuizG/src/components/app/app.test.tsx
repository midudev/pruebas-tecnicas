import { render } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import App from './app';
import Header from '../header/header';
import DashboardPage from '../../pages/dashboard/dashboard';

vi.mock('../header/header');
vi.mock('../../pages/dashboard/dashboard');

describe('Given the component App', () => {
	describe('When it renders', () => {
		beforeEach(() => {
			render(
				<Provider store={store}>
					<App></App>
				</Provider>
			);
		});

		test('Then the components Header and DashboardPage should have been called', () => {
			expect(Header).toHaveBeenCalled();
			expect(DashboardPage).toHaveBeenCalled();
		});
	});
});
