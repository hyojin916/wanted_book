import { stringifyUrl, parse } from 'query-string'
import { API } from 'utils/config'

export async function getBooks(search, startIndex) {
  const { q, ...rest } = parse(search)
  const input = stringifyUrl({
    url: `${API}`,
    query: {
      q: `${q}`,
      startIndex,
      projection: 'full',
      ...rest
    }
  })

  return fetch(input)
}
