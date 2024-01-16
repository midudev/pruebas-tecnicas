import { ARIA_LABELS } from '../../constants/aria-labels'
import { useSlider } from '../../hooks/useSlider'
import componentClass from './Slider.module.css'

export function Slider () {
  const { currentBook, isLoaded, setIsLoaded } = useSlider()

  return (
        <div className={componentClass.sliderContainer}>
          <section
            className={componentClass.slider}
          >
            <article
              className={componentClass.slide}
            >
              <div className={`${componentClass.details} ${componentClass.animatedItems} ${isLoaded ? componentClass.loaded : ''}`}>
                <p
                  className={componentClass.synopsis}
                >
                  {currentBook.synopsis}
                </p>
                <h3
                  aria-label={ARIA_LABELS.BookAuthor}
                  className={componentClass.author}
                >
                  {currentBook.author.name}
                </h3>
              </div>
              <img
                onLoad={() => { setIsLoaded(true) }}
                src={currentBook.cover}
                alt={currentBook.title}
                className={`${componentClass.cover} ${componentClass.animatedItems} ${isLoaded ? componentClass.loaded : ''}`}
              />
            </article>
          </section>
        </div>
  )
}
