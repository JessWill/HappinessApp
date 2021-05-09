import React from "react";
import RankingsTable from "./Components/tables/rankingsTable";


const columns = [
  { headerName: "Rank", field: "rank", sortable:"true"},
  { headerName: "Country", field: "country", sortable:"true", filter:"true"},
  { headerName: "Score", field: "score", sortable:"true"},
  { headerName: "Year", field: "year", sortable: "true"},
]


export default function Rankings(){
  return (
    <div>
      <div class="container">
        <h1>Rankings</h1>
      </div>

      <div>
        <RankingsTable api="rankings" columns={columns}/>
      </div>
    </div>
  );

}  