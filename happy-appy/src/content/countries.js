import React from "react";
import GetRankings from "../components/requests/getRankings";
import CountriesTable from "../components/tables/countriesTable";


const columns = [
  { headerName: "Country", field: "country", sortable: "true" }
]

export default function Countries() {
  const { rankings } = GetRankings();

  return (
    <div class="body-container">
      <div class="container">
        <br />
        <center><h1>Participating Countries</h1></center>
        <br />
      </div>
      <center>
        <div>
          <CountriesTable api="countries" columns={columns} />
        </div>
      </center>
    </div>
  );

}