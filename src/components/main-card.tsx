import SearchCard from './search-card'
import { useEffect, useState } from "react"
import { listFlights } from "../lib/api"
import FlightsTable from './flights-table'
import { Flight, QueryParams } from '../lib/types'
import '../styles/main-card.css'
import Loading from './loading'

export default function MainCard() {
  const [flights, setFlights] = useState<Flight[] | []>([])
  const [isLoading, setIsLoading] = useState(false)

  async function fetchFlights (queryParams?: QueryParams) {
    try {
      setIsLoading(true)
      const data = await listFlights(queryParams || {})
      if (Array.isArray(data)) {
        setFlights(data)
      } else {
        setFlights([])
      }
    } catch (error) {
      console.log('Error during fetching flights', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchFlights()
  },[])

  return (
    <div id='main-card'>
      <SearchCard fetchFlights={fetchFlights}/>
        {
          isLoading ? <Loading/> :<FlightsTable flights={flights}/>
        }
    </div>
  )
}
