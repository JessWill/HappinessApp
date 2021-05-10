import React, { useState } from "react";
import FactorsTable from "../components/tables/factorsTable.js";
import YearSelector from "../components/yearSelector.js"

const columns = [
  { headerName: "Rank", field: "rank", sortable: "true" },
  { headerName: "Country", field: "country", sortable: "true", filter: "true" },
  { headerName: "Score", field: "score", sortable: "true" },
  { headerName: "Economy", field: "economy", sortable: "true" },
  { headerName: "Family", field: "family", sortable: "true" },
  { headerName: "Health", field: "health", sortable: "true" },
  { headerName: "Freedom", field: "freedom", sortable: "true" },
  { headerName: "Generosity", field: "generosity", sortable: "true" },
  { headerName: "Trust", field: "trust", sortable: "true" },
]

export default function Factors() {
  const [year,setYear] =useState('2020');
  
  
  return (
    <div>
      <div class="container">
        <h1>Factors</h1>
      </div>
      <div>
        <YearSelector onSubmit={setYear}/>
      </div>
      <div>
        <FactorsTable api="factors/" year={year} columns={columns} />
      </div>
    </div>
  );

}
