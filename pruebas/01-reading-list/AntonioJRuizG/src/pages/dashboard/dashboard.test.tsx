import { render } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import DashboardPage from './dashboard';
import List from '../../components/list/list';
import ReadingList from '../../components/reading.list/reading.list';

vi.mock('../../components/list/list');
vi.mock('../../components/reading.list/reading.list');

describe('Given the component Dashboard', () => {
	describe('When it renders', () => {
		beforeEach(() => {
			render(
				<Provider store={store}>
					<DashboardPage></DashboardPage>
				</Provider>
			);
		});

		test('Then the components List and ReadingList should have been called', () => {
			expect(List).toHaveBeenCalled();
			expect(ReadingList).toHaveBeenCalled();
		});
	});
});
