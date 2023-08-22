export function getSearchParams(title, author, category) {
  const params = {}

  if (title !== '') params.title = title
  if (author !== '') params.author = author
  if (category !== '') params.category = category

  return params
}
