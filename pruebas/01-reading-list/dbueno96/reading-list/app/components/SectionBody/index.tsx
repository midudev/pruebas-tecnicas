import { IWithChildren } from '../SectionTitle'

interface ISectionBody extends IWithChildren {}

export default function SectionBody (props: ISectionBody) {
  const { children } = props
  return <article>{children}</article>
}
