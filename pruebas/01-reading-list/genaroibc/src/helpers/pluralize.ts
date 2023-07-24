export const pluralize = (substantive: string, count: number) => {
  const isPlural = count !== 1

  return isPlural ? `${substantive}s` : substantive
}
