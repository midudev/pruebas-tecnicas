import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app/app';

const container = document.getElementById('root')!;

const root = createRoot(container);

root.render(
	<React.StrictMode>
		<App></App>
	</React.StrictMode>
);
