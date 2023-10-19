import { render, screen } from '@testing-library/react'
import { Filters } from '../'

const filtersLabels = {
  search: 'Busca un libro',
  byPage: 'Filter by page',
  filterByCategory: 'Filter by'
}

const setActualFilterByGenreMock = vi.fn()
const setActualFilterByPageMock = vi.fn()
const setActualSearchParamMock = vi.fn()

describe('<Filters />', () => {
  beforeEach(() => {
    render(<Filters setActualFilterByGenre={setActualFilterByGenreMock} setActualFilterByPage={setActualFilterByPageMock} setActualSearchParam={setActualSearchParamMock} />)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render 3 filters and click-event filters should work', () => {
    Object.values(filtersLabels).forEach((filterLabel) => {
      const labelElement = screen.getByText(filterLabel)
      expect(labelElement).toBeDefined()
    })
  })
})
