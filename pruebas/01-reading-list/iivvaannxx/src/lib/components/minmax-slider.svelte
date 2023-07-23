<script lang='ts' context='module'>

  export interface Props {

    min: number
    max: number

    valueMin: number
    valueMax: number

    minGap?: number
  }

  type OnInputEvent = Event & {
    currentTarget: EventTarget & HTMLInputElement;
  }


</script>

<script lang='ts'>

  export let {

    min, max,
    valueMin = 100, valueMax = 800,

    minGap = 300

  } = { } as Props

  let percentLeft: number
  let percentRight: number

  // Calculate the progress width depending on each range.
  $: percentLeft = (valueMin / max) * 100
  $: percentRight = 100 - ((valueMax / max) * 100)

  function ensureValidInput (event: OnInputEvent) {

    const isEmpty = event.currentTarget.value === ''
    const newValue = parseInt(event.currentTarget.value, 10);
    const isMaxInput = event.currentTarget.dataset.input === 'max';

    if (isMaxInput) {

      // We are trying to cross the max over the min.
      if (newValue - valueMin < minGap) {

        valueMax = Math.max(valueMin + minGap, newValue);
        event.currentTarget.value = valueMax.toString();

      }

      else if (newValue > max || isEmpty) {

        valueMax = max;
        event.currentTarget.value = valueMax.toString();
      }
    }

    else {

      // We are trying to cross the min over the max.
      if (valueMax - newValue < minGap) {

        valueMin = Math.min(valueMax - minGap, newValue);
        event.currentTarget.value = valueMin.toString();
      }

      else if (newValue < min || isEmpty) {

        valueMin = min;
        event.currentTarget.value = valueMin.toString();
      }
    }
  }


</script>

<div class='p-4'>

  <div class='flex gap-4 justify-between mb-4'>

    <input data-input='min' class='border-2 rounded-lg text-center w-full h-10 border-gray-200' type='number'

      on:input={ensureValidInput}
      bind:value={valueMin}

      min={min}
      max={max}
    />

    <input data-input='max' class='border-2 rounded-lg text-center w-full h-10 border-gray-200' type='number'

      on:input={ensureValidInput}
      bind:value={valueMax}

      min={min}
      max={max}
    />

  </div>

  <div class='bg-gray-200 w-full h-2 rounded-lg relative'>

    <div class='absolute progress bg-green-500 h-2 rounded-lg'

      style:--percentLeft='{percentLeft}%'
      style:--percentRight='{percentRight}%'

    ></div>

  </div>

  <div class='relative'>

    <input data-input='min' class='absolute range-input -top-2 h-2 w-full' type='range'

      on:input={ensureValidInput}
      bind:value={valueMin}

      min={min}
      max={max}
    />

    <input data-input='max' class='absolute range-input -top-2 h-2 w-full' type='range'

      on:input={ensureValidInput}
      bind:value={valueMax}

      min={min}
      max={max}
    />

  </div>

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
    background: theme('colors.green.300');

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

</style>
