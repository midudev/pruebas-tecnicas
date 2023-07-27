export type FilterByPagesProps = {
  maxPage: number
  minPage: number
  onPageChange?: (maxPage: number) => void
  selectedPage?: number
}
