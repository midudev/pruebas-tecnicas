<script>
    import { cubicIn } from 'svelte/easing'
    export let key
    export let duration = 300
  
    function flush(
      node,
      { delay = 0, duration = 300, easing = cubicIn },
      { direction = 'both' } 
    ) {
      direction === 'out' 
  
      return {
        delay,
        duration,
        easing,
        css: (t) => `
          scale: ${t};
          rotate: ${t}turn;
        `,
      }
    }
  </script>
  
  {#key key}
    <div
      in:flush={{ duration, delay: duration }}
      out:flush={{ duration }}
    >
      <slot />
    </div>
  {/key}