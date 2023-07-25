import { Slider } from 'antd'
import { useBooksStore } from '../stores/books'

export const PageFilter = () => {
  const maxPage = useBooksStore((state) => state.maxPage)
  const setSliderValue = useBooksStore((state) => state.setSliderValue)
  const sliderValue = useBooksStore((state) => state.sliderValue)
  const booksFilter = useBooksStore((state) => state.booksFilter)
  const selectedCategory = useBooksStore((state) => state.selectedCategory)

  return (
    <div className='slider-page'>
      <p>N°. de págs.:</p>
      <Slider
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
