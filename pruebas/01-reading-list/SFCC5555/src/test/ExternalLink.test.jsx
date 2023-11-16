import { render, screen} from '@testing-library/react'
import { describe, test} from 'vitest'
import { ExternalLink } from '../components/ExternalLink';

describe('ExternalLink', () => {

	test('renders ExternalLink component without errors', () => {
		// Render the component
		render(<ExternalLink />);
	
		screen.getByText('Challenge by');

	});

})

