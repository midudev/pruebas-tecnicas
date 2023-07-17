import { useLibraryStore } from '@/store/Library.store'
import { render, screen } from '@testing-library/react'
import { SectionOfBooks } from '../'

const realState = useLibraryStore.getState()
const dataToFilter = realState.avaibleBooks

const stylesConfig = { backgroundType: 'transparent', align: 'grid' }
describe('<SectionOfBooks />', () => {
  beforeEach(() => {
    render(<SectionOfBooks dataToFilter={dataToFilter} stylesConfig={stylesConfig} title='Test component' />)
  })

  it('Should render its elements', () => {
    expect(screen.getByText('Test component')).toBeDefined()
  })
})
