import { SortParams } from "./types"

export const SORTING_DEFAULTS: SortParams = {
  sortBy: 'departure_time',
  order: 'asc'
}

export const TABLE_HEADERS = ['Departure City', 'Departure Airport', 'Arrival City', 'Arrival Airport', 'Departure Date', 'Departure Time', 'Return Date', 'Return Time', 'Price', 'Flight Duration']

export const SORTBY_OPTIONS = [{value: 'departure_time', label: 'Departure Time'}, {value: 'return_time', label: 'Return Time'}, {value: 'price', label: 'Price'}, {value: 'flight_duration', label: 'Flight Duration'}]

export const ORDER_OPTIONS = [{value: 'asc', label: 'Ascending'}, {value: 'desc', label: 'Descending'}]