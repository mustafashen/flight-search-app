import { ListingArguments, QueryParams } from "../types"

export function buildQuery(queryParams: QueryParams) {

  const mockPath = 'http://any.url'
  const url = new URL('/api/flights', mockPath)
  
  Object.keys(queryParams).forEach((key: string) => {
    url.searchParams.append(key, queryParams[key as ListingArguments])
  })

  return url.pathname + url.search
}