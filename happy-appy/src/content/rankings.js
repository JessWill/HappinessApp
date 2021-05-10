import React from "react";
import GetRankings from "../components/requests/getRankings";
import RankingsTable from "../components/tables/rankingsTable";


const columns = [
  { headerName: "Rank", field: "rank", sortable: "true" },
  { headerName: "Country", field: "country", sortable: "true", filter: "true" },
  { headerName: "Score", field: "score", sortable: "true" },
  { headerName: "Year", field: "year", sortable: "true" },
]

export default function Rankings() {
  const { rankings } = GetRankings();

  return (
    <div class="body-container">
      <div class="container">
        <br />
        <center><h1>Rankings</h1></center>
        <br />
      </div>
      <center>
        <div>
          <RankingsTable api="rankings" columns={columns} />
        </div>
      </center>
    </div>
  );

}