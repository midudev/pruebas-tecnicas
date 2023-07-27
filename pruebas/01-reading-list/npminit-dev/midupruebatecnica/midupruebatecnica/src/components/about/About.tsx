import React from "react"
import '../../styles/global-variables.css'
import Link from "antd/es/typography/Link"

export default function About(): JSX.Element {
  return (
    <Link type="success" href={'https://github.com/npminit-dev/npminit-dev.git'}>
      GitHub Repo: https://github.com/npminit-dev/npminit-dev.git
    </Link>
  )
}