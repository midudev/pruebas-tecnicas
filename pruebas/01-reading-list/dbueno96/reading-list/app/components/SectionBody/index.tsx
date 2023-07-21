interface ISectionBody extends IWithChildren {}

export default function SectionBody (props: ISectionBody) {
  const { children } = props
  return <article className='h-full overflow-y-auto'>{children}</article>
}
