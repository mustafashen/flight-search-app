import { sortingDefaults } from "../constants";
import { Flight, QueryParams } from "../types";
import { validateFlightQuery, validateFlights } from "../validation";
import { buildQuery } from "./utils";

export async function listFlights(listingArguments: QueryParams): Promise<Flight[] | []> {

  const args = {
    ...sortingDefaults,
    ...listingArguments
  }

  try {
    const isValidQuery = validateFlightQuery(args)
    if (!isValidQuery) throw new Error('Invalid query')
    
    const url = buildQuery(args)

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type':'application/json'
      },
    })

    const data: Flight[] = await response.json()

    if (validateFlights(data)) {
      return data
    } else {
      throw new Error('Invalid flight data')
    }

  } catch (error: unknown) {
    console.log(error)
    return []
  }
}
