<script lang='ts' context='module'>

  /** @brief The event that is triggered when the input value changes. */
  type OnInputEvent = Event & {

    currentTarget: EventTarget & HTMLInputElement
  }

</script>

<script lang='ts'>

  export let min: number
  export let max: number
  export let valueMin = min
  export let valueMax = max

  export let labelMin = 'Min'
  export let labelMax = 'Max'
  export let minGap = 100

  // Debounce the onInput handler to avoid spamming the event.
  export let onInput = (min: number, max: number) => { }

  // Ensure that the given props are within valid ranges.
  $: valueMin = Math.max(min, valueMin)
  $: valueMax = Math.min(max, valueMax)

  // Calculate the progress width depending on each range.
  $: percentLeft = (valueMin / max) * 100
  $: percentRight = 100 - ((valueMax / max) * 100)

  /** @brief Ensures that the input is between valid ranges. */
  function ensureValidInput (event: OnInputEvent) {

    const isEmpty = event.currentTarget.value === ''
    const newValue = parseInt(event.currentTarget.value, 10)
    const isMaxInput = event.currentTarget.dataset.input === 'max'

    if (isMaxInput) {

      // We are trying to cross the max over the min.
      if (newValue - valueMin < minGap) {

        valueMax = Math.max(valueMin + minGap, newValue)
        event.currentTarget.value = valueMax.toString()
      }

      // The value is empty or greater than the max.
      else if (newValue > max || isEmpty) {

        valueMax = max
        event.currentTarget.value = valueMax.toString()
      }

      else { valueMax = newValue }
    }

    else {

      // We are trying to cross the min over the max.
      if (valueMax - newValue < minGap) {

        valueMin = Math.min(valueMax - minGap, newValue)
        event.currentTarget.value = valueMin.toString()
      }

      // The value is empty or less than the min.
      else if (newValue < min || isEmpty) {

        valueMin = min
        event.currentTarget.value = valueMin.toString()
      }

      else { valueMin = newValue }
    }

    onInput(valueMin, valueMax)
  }

  // Extract common classes into simple constants.
  const labelClasses = 'flex flex-col w-full justify-center items-center gap-2'
  const inputClasses = 'border-2 rounded-lg text-center w-full h-10 border-gray-200'
  const rangeClasses = 'absolute range-input -top-2 h-2 w-full'

</script>

<div class='flex gap-4 justify-between mb-4'>

    <label class={labelClasses}>

      <span>{labelMin}</span>
      <input

        type='number'
        class={inputClasses}

        min={min}
        max={max}
        value={valueMin}

        data-input='min'
        on:change={ensureValidInput}
      />

    </label>


    <label class={labelClasses}>

      <span>{labelMax}</span>
      <input

        type='number'
        class={inputClasses}

        min={min}
        max={max}
        value={valueMax}

        data-input='max'
        on:change={ensureValidInput}
      />

    </label>

</div>

<div class='bg-gray-200 w-full h-2 rounded-lg relative'>

  <div class='absolute progress bg-blue-400 h-2 rounded-lg'

    style:--percentLeft='{percentLeft}%'
    style:--percentRight='{percentRight}%'

  ></div>

</div>

<div class='relative'>

  <input

    type='range'
    class={rangeClasses}

    min={min}
    max={max}
    bind:value={valueMin}

    data-input='min'
    on:input={ensureValidInput}
  />

  <input

    type='range'
    class={rangeClasses}

    min={min}
    max={max}
    bind:value={valueMax}

    data-input='max'
    on:input={ensureValidInput}
  />

</div>


<style>

  .range-input {

    background: none;
    pointer-events: none;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .progress {

    left: var(--percentLeft);
    right: var(--percentRight);
  }

  input[type='range']::-webkit-slider-thumb {

    pointer-events: auto;
    width: 1rem;
    height: 1rem;

    border-radius: 50%;
    background: theme('colors.blue.500');

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

</style>
