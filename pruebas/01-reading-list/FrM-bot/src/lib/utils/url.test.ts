import { describe, expect, it } from 'vitest'
import { APIPaths, baseUrl } from '$lib/services/urls'
import { fromObjectQueriesToUrl } from '$lib/utils/url'

const queries = {
  q: 'dune',
  by: 'author'
}

describe('Url util', () => {
  it('Should transform from object queries to url with queries', async () => {
    const url = fromObjectQueriesToUrl({ queries, baseUrl: baseUrl + APIPaths.get.books })
    console.log(url.toString(), `${baseUrl + APIPaths.get.books}?q=dune&by=author`)
    expect(url.toString()).toBe(`${baseUrl + APIPaths.get.books}?q=dune&by=author`)
  })
})
