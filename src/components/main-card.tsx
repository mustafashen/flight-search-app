import SearchCard from './search-card'
import { useEffect, useState } from "react"
import { listFlights } from "../lib/api"
import FlightsTable from './flights-table'
import { Flight, QueryParams } from '../lib/types'

export default function MainCard() {
  const [flights, setFlights] = useState<Flight[] | []>([])

  async function fetchFlights (queryParams?: QueryParams) {
    const data = await listFlights(queryParams ? queryParams : {})
    if (Array.isArray(data)) {
      setFlights(data)
    } else {
      setFlights([])
    }
  }

  useEffect(() => {
    fetchFlights()
  },[])
  
  return (
    <div>
      <SearchCard fetchFlights={fetchFlights}/>
      <FlightsTable flights={flights}/>
    </div>
  )
}
