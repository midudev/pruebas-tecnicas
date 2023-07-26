import { component$ } from "@builder.io/qwik"
import styles from "./header.module.css"

export default component$(() => {
  return (
    <nav class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <ul class="w-full justify-end">
          <li>
            <a
              class="font-bold text-lg"
              href="https://github.com/KewinBarboza"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              class="font-bold text-lg"
              href="https://linkedin.com/in/kewinbarboza"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
})
