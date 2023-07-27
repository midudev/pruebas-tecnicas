export function classNamesJoin(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
