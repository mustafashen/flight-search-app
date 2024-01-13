import { FilterArguments, Flight, QueryParams } from "../../types"

const filterFunctions: Record<FilterArguments, (flight: Flight, filter: string) => boolean> = {
  departure_filter: (flight: Flight, filter: string) => {
    if (
      flight.departure_airport.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      flight.departure_city.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    ) return true
    else return false
  },
  arrival_filter: (flight: Flight, filter: string) => {
    if (
      flight.arrival_airport.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      flight.arrival_city.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    ) return true
    else return false
  },
  departure_date: (flight: Flight, filter: string) => {
    if (flight.departure_date.split(' ')[0] === filter) 
      return true
    else return false
  },
  return_date: (flight: Flight, filter: string) => {
    if (flight.return_date.split(' ')[0] === filter)
      return true
    else return false
  }
}

export function filter(data: Flight[], queryParams: QueryParams) {

  Object.keys(filterFunctions).forEach((key: string) => {
    if (queryParams[key as FilterArguments]) data = data.filter((flight: Flight) => {
      return filterFunctions[key as FilterArguments](flight, queryParams[key as FilterArguments] as string)
    })
  })

  return data
}