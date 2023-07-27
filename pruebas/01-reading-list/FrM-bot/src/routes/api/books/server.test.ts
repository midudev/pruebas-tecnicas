import { describe, it, expect } from 'vitest'
import { GET } from './+server'
import type { Library } from '$lib/types/book'
import { APIPaths, baseUrl } from '$lib/services/urls'
import { fromObjectQueriesToUrl } from '$lib/utils/url'

const queries = {
  q: 'dune'
}

describe('Books route', () => {
  it('Should search correctly -> Dune', async () => {
    const url = fromObjectQueriesToUrl({ queries, baseUrl: baseUrl + APIPaths.get.books })
    const response = await GET({ request: { url } })
    const data = (await response.json()) as { data: Library[] }
    console.log(data)
    expect(data.data).toHaveLength(1)
    expect(data.data.at(0)?.book.title.toLocaleLowerCase()).toContain(queries.q)
  })
})
