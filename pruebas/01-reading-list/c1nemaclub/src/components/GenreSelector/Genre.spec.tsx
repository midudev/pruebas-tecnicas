import { screen, render, fireEvent } from '@testing-library/react';
import GenreSelector from './GenreSelector';

describe('GenreSelector', () => {
  it('should render the GenreSelector', () => {
    expect(render(<GenreSelector onChange={() => {}} />)).toBeTruthy();
  });

  it('Genre should have appear in the document when changed', () => {
    render(<GenreSelector onChange={() => {}} />);

    const selectEl = screen.getByRole('combobox') as HTMLSelectElement;

    fireEvent.change(selectEl, { target: { value: 'Fantasía' } });

    expect(selectEl.value).toBe('Fantasía');

    const genreText = screen.getByText(/Fantasía/i);
    expect(genreText).toBeTruthy();
  });

  it('Should call onChange function on Change', () => {
    const onChange = vi.fn();
    render(<GenreSelector onChange={onChange} />);

    const selectEl = screen.getByRole('combobox') as HTMLSelectElement;

    fireEvent.change(selectEl, { target: { value: 'Ciencia ficción' } });
    expect(selectEl.value).toBe('Ciencia ficción');

    expect(onChange).toHaveBeenCalled();
  });
});
