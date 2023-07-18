import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './components/app/app';

import { store } from './store/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root')!;

const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
