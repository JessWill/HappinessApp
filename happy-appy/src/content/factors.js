import React, { useState } from "react";
import FactorsTable from "../components/tables/factorsTable.js";
import YearSelector from "../components/tables/yearSelector.js"

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
    <div class="body-container">
      <div class="container">
        <br/>
        <center><h1>Factors</h1></center>
        <br/>
      </div>
      <div><center>
      <YearSelector onSubmit={setYear}/>
      <br/>
        <FactorsTable api="factors/" year={year} columns={columns} />
        </center>
      </div>
    </div>
  );

}
