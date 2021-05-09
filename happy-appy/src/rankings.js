import React, { Component, useState } from "react";
import SearchBar from "./Components/search/searchBar";
import useRankings from "./Components/search/useRankings";
import RankingsTable from "./Components/tables/rankingsTable";
import YearSelector from "./Components/yearSelector";


const columns = [
  { headerName: "Rank", field: "rank", sortable:"true"},
  { headerName: "Country", field: "country", sortable:"true", filter:"true"},
  { headerName: "Score", field: "score", sortable:"true"},
  { headerName: "Year", field: "year", sortable: "true"},
]


export default function Rankings(){
  const [search, setSearch] = useState('');
  const {loading, Rankings, error} = useRankings();
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