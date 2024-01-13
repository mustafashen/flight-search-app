
import { Fragment } from 'react'
import { Flight } from '../lib/types'

export default function FlightRow({flight}: {flight: Flight}) {
  return (
    <tr>
      {
        Object.values(flight).map((value, index) => {
          if (index === 0) return null
          else {
            if (index === 5 || index === 6) {
              const dateTime = (value as string).split(' ')
              dateTime[0] = dateTime[0].split('-').reverse().join('/')
              return (
                <Fragment key={`${flight.id}_${index}_datetime`}>
                  <td key={`${flight.id}_${index}_date`}>{dateTime[0]}</td>
                  <td key={`${flight.id}_${index}_time`}>{dateTime[1]}</td>
                </Fragment>
              )
            }
            return (
              <td key={`${flight.id}_${index}`}>{value}</td>
            )
          } 
        })
      }
    </tr>
  )
}
