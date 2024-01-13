import { Flight, Order, QueryParams, SortBy } from "../../types";

const sortingFunctions: Record<SortBy, (a: Flight, b: Flight, order: Order) => number> = {
  departure_time: (a: Flight, b: Flight, order: Order) => {
    const a_departure_time = a.departure_date.split(' ')[1]
    const b_departure_time = b.departure_date.split(' ')[1]

    if (order === 'asc')
      return a_departure_time.localeCompare(b_departure_time)
    else if (order === 'desc')
      return b_departure_time.localeCompare(a_departure_time)
    return 0
  },
  return_time: (a: Flight, b: Flight, order: Order) => {
    const a_return_time = a.return_date.split(' ')[1]
    const b_return_time = b.return_date.split(' ')[1]

    if (order === 'asc')
      return a_return_time.localeCompare(b_return_time)
    else if (order === 'desc')
      return b_return_time.localeCompare(a_return_time)
    return 0
  },
  price: (a: Flight, b: Flight, order: Order) => {
    const a_price = Number(a.price.replace('$', ''))
    const b_price = Number(b.price.replace('$', ''))

    if (order === 'asc')
      return a_price - b_price
    else if (order === 'desc')
      return b_price - a_price
    return 0
  },
  flight_duration: (a: Flight, b: Flight, order: Order) => {
    const a_duration = a.flight_duration
    const b_duration = b.flight_duration

    if (order === 'asc')
      return a_duration - b_duration
    else if (order === 'desc')
      return b_duration - a_duration
    return 0
  }
}
export function sort(data: Flight[], queryParams: QueryParams) {

  if (!(queryParams.sortBy && queryParams.order)) {
    queryParams.sortBy = 'departure_time'
    queryParams.order = 'asc'
  }
  
  data.sort((a, b) => sortingFunctions[queryParams.sortBy as SortBy](a, b, queryParams.order as Order))

  return data
}