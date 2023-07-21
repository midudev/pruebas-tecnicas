import { Fragment, useId } from 'react'
import { useFilters } from '@/hooks/useFilters'

import { genres } from '@/assets/values'

import filterStyles from '@/assets/styles/Filters/FilterSection.module.css'

export function FilterSection() {
  const filterID = useId()
  const { currentGenre, range, changeCurrentGenre, changeNumberPages } = useFilters()

  return (
    <form className={filterStyles.filterSection}>
      <fieldset className={filterStyles.filterSection__field}>
        <legend className={filterStyles.filterSection__fieldTitle}>Número de páginas</legend>
        <input
          type='range'
          name={`${filterID}-numberPages`}
          id={`${filterID}-numberPages`}
          className={filterStyles.filterSection__pageNumberFilter}
          min={0}
          max={range.maxNumberPages}
          value={range.currentNumberPages}
          step={range.step}
          onChange={changeNumberPages}
          aria-describedby='numberPage'
        />
        <label htmlFor={`${filterID}-numberPages`}>Máximo {range.currentNumberPages}</label>
      </fieldset>
      <fieldset className={filterStyles.filterSection__field}>
        <legend className={filterStyles.filterSection__fieldTitle}>Género</legend>
        <div className={filterStyles.filterSection__containerOptions}>
          {genres.map((genre) => {
            return (
              <Fragment key={genre}>
                <input
                  type='radio'
                  name={`${filterID}-genre`}
                  id={`${filterID}-${genre}`}
                  value={genre}
                  className={filterStyles.filterSection__checkGenre}
                  checked={genre === currentGenre}
                  onChange={changeCurrentGenre}
                />
                <label
                  htmlFor={`${filterID}-${genre}`}
                  className={filterStyles.filterSection__labelGenre}
                >
                  {genre}
                </label>
              </Fragment>
            )
          })}
        </div>
      </fieldset>
    </form>
  )
}
