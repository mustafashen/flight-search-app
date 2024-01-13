export type FilterArguments = 'departure_filter' | 'arrival_filter' | 'departure_date' | 'return_date'

export type SortArguments = 'sortBy' | 'order'

export type ListingArguments = FilterArguments & SortArguments

export type SortBy = 'departure_time' | 'return_time' | 'price' | 'flight_duration'

export type Order = 'asc' | 'desc'

export type SortParams = {
  sortBy?: SortBy,
  order?: Order,
}

export type FilterParams = {
  departure_filter?: string,
  arrival_filter?: string,
  return_date?: string,
  departure_date?: string,
}

export type QueryParams = SortParams & FilterParams

export type Flight = {
  id: string
  departure_city: string, 
  arrival_city: string, 
  departure_airport: string, 
  arrival_airport: string, 
  departure_date: string, 
  return_date: string,
  price: string, 
  flight_duration: number, 
}