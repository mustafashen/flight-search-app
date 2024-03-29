
import { TABLE_HEADERS } from '../lib/constants'
import { Flight } from '../lib/types'
import FlightRow from './flight-row'
import '../styles/flights-table.css'
export default function FlightsTable({flights}: {flights: Flight[]}) {

  return (
    <div id='flights-table'>
      <table style={{
        textAlign: 'center'
      }}>
        <thead>
          <tr>
            {
              TABLE_HEADERS.map((header, index) => <th key={index}>{header}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            flights.map((flight) => (
              <FlightRow flight={flight} key={flight.id}/>
            ))
          }
        </tbody>
        <tfoot/>
      </table>
    </div>
  )
}
