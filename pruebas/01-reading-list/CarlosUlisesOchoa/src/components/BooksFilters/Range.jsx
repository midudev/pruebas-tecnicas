import PropTypes from 'prop-types'
import { useId, useState } from 'react'

export function Range({
  label,
  min,
  max,
  step = 1,
  onChange,
  className,
  inputClassName,
}) {
  const [qty, setQty] = useState(max)
  const id = useId()

  return (
    <>
      <label htmlFor={id} className={className}>
        {label}
      </label>
      <input
        type='range'
        min={min}
        max={max}
        step={step}
        className={`${inputClassName} py-2 px-3 rounded-md`}
        name={id}
        id={id}
        value={qty}
        onChange={(e) => {
          const value = e.target.value
          setQty(value)
          onChange(value)
        }}
      />

      <span className='block text-inherit dark:text-inherit text-sm italic'>
        {qty && `Máximo: ${qty} páginas`}
      </span>
    </>
  )
}

Range.propTypes = {
  label: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
}
