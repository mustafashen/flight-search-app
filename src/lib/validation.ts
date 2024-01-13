import Ajv from "ajv"
import addFormats from "ajv-formats"

const ajv = new Ajv()
addFormats(ajv)
ajv.addFormat("price", /\d+(,\d{1,2})?$/)

const FlightSchema = {
  type: "array",
  items: {
    type: "object",
    properties: { 
      departure_city: {type: "string"}, 
      arrival_city: {type: "string"}, 
      departure_airport: {type: "string"}, 
      arrival_airport: {type: "string"}, 
      departure_date: {type: "string", format: "date-time"}, 
      return_date: {type: "string", format: "date-time"},
      price: {type: "string", format: "price"}, 
      flight_duration: {type: "number"}, 
      id: {type: "string", format: "uuid"}
    },
    required: ["departure_city", "arrival_city", "departure_airport", "arrival_airport", "departure_date", "return_date", "price", "flight_duration", "id"]
  },
  additionalProperties: false
}
const validateFlights = ajv.compile(FlightSchema)

const FlightQuerySchema = {
  type: "object",
  properties: {
    departure_filter: {type: "string"},
    arrival_filter: {type: "string"},
    departure_date: {type: "string", format: "date"},
    return_date: {type: "string", format: "date"},
    sortBy: {
      type: "string",
      enum: ["asc", "desc"]
    },
    order: {
      type: "string",
      enum: ["departure_time", "return_time", "flight_duration", "price"]
    }
  },
  required: ['sortBy', 'order'],
  additionalProperties: false
}
const validateFlightQuery = ajv.compile(FlightQuerySchema)

export {
  validateFlights,
  validateFlightQuery
}