import { Slider } from 'antd'
import { useBooksStore } from '../stores/books'
import { useSearchBooks } from '../stores/searchBooks'

export const PageFilter = () => {
  const maxPage = useBooksStore((state) => state.maxPage)
  const setSliderValue = useBooksStore((state) => state.setSliderValue)
  const sliderValue = useBooksStore((state) => state.sliderValue)
  const booksFilter = useBooksStore((state) => state.booksFilter)
  const selectedCategory = useBooksStore((state) => state.selectedCategory)
  const search = useSearchBooks((state) => state.search)

  return (
    <div className='slider-page'>
      <p>N°. de págs.:</p>
      <Slider
        disabled={search !== '' && true}
        className='slider-component'
        max={maxPage}
        onChange={(value) => {
          setSliderValue(value)
          booksFilter(selectedCategory, value)
        }}
        value={sliderValue}
      />
      <span>{sliderValue}</span>
    </div>
  )
}
