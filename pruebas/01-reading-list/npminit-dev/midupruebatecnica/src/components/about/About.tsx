import React from "react"
import '../../styles/global-variables.css'
import Link from "antd/es/typography/Link"
import { SectionSelected } from "../../types/navigation"


export default function About(): JSX.Element {
  return (
    <section>
      <Link type="success" href={'https://github.com/npminit-dev/npminit-dev.git'}>
        GitHub Repo: https://github.com/npminit-dev/npminit-dev.git
      </Link>
    </section>
  )
}