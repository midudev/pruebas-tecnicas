import { render, screen} from '@testing-library/react'
import { describe, it } from 'vitest'
import { ExternalLink } from '../components/ExternalLink';

describe('ExternalLink', () => {

	it('renders ExternalLink component without errors', () => {
		// Render the component
		render(<ExternalLink />);
	
		screen.getByText('Challenge by')
	
	});

})

