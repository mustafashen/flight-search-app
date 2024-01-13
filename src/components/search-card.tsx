import { ChangeEvent, useEffect, useState } from "react";
import Checkbox from "./checkbox";
import Input from "./input";
import { Order, QueryParams, SortBy } from "../lib/types";
import { ORDER_OPTIONS, SORTBY_OPTIONS } from "../lib/constants";

export default function SearchCard({
  fetchFlights,
}: {
  fetchFlights: (queryParams?: QueryParams) => void;
}) {
  const [isOneWay, setIsOneWay] = useState<boolean>(false);
  const [queryInputs, setQueryInputs] = useState<QueryParams>({
    departure_filter: "",
    arrival_filter: "",
    departure_date: "",
    return_date: "",
    order: "asc",
    sortBy: "departure_time"
  });

  const handleOneWayToggle = (event: ChangeEvent<HTMLInputElement>) => {
    setIsOneWay(event.target.checked)
  };

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQueryInputs({ ...queryInputs, [event.target.id]: event.target.value })
  };

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setQueryInputs({ ...queryInputs, sortBy: event.target.value as SortBy})
  }

  const handleOrderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setQueryInputs({ ...queryInputs, order: event.target.value as Order})
  }

  useEffect(() => {
    if (isOneWay) {
      setQueryInputs({ ...queryInputs, return_date: "" })
    }
  }, [isOneWay]);

  useEffect(() => {
    fetchFlights(queryInputs)
  }, [queryInputs]);

  return (
    <div>
      <div>
        <Input
          id="departure_filter"
          label="Departure airport"
          placeholder="Departure airport"
          onChange={handleFilterChange}
          value={queryInputs.departure_filter ? queryInputs.departure_filter : ""}
        />
        <Input
          id="arrival_filter"
          label="Arrival airport"
          placeholder="Arrival airport"
          onChange={handleFilterChange}
          value={queryInputs.arrival_filter ? queryInputs.arrival_filter : ""}
        />
        <Input
          id="departure_date"
          label="Departure date"
          type="date"
          onChange={handleFilterChange}
          value={queryInputs.departure_date ? queryInputs.departure_date : ""}
        />
        <Input
          id="return_date"
          label="Return date"
          type="date"
          disabled={isOneWay}
          onChange={handleFilterChange}
          value={queryInputs.return_date ? queryInputs.return_date : ""}
        />
        <Checkbox
          label="One way"
          checked={isOneWay}
          onChange={handleOneWayToggle}
        />
      </div>
      <div>
        <select
          value={queryInputs.sortBy}
          onChange={handleSortChange}>
          {
            SORTBY_OPTIONS.map((option) => {
              return <option 
                      key={option.value}
                      value={option.value}>
                        {option.label}
                    </option>
            })
          }
        </select>
        <select
          value={queryInputs.order}
          onChange={handleOrderChange}>
          {
            ORDER_OPTIONS.map((option) => {
              return <option 
                      key={option.value}
                      value={option.value}>
                        {option.label}
                    </option>
            })
          }
        </select>
      </div>
    </div>
  );
}
