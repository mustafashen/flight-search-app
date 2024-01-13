import { createServer } from "miragejs"
import { flights } from "./mock-dataset"
import { Flight } from "../types"
import { filter } from "./utils/filter"
import { sort } from "./utils/sort"

export function initMockServer() {
  createServer({
    routes() {
      this.namespace = "api"
      this.timing = 500
      this.get("/flights", (schema, request) => {

        let data: Flight[] | [] = schema.db.flights

        data = filter(data, request.queryParams)
        data = sort(data, request.queryParams)

        return data
        
      })
    },
    seeds(server) {
      server.db.loadData({ flights })
    }
  })
}