import React, { useState } from "react";
import SearchBar from "../components/search/searchBar";
import useRankings from "../components/search/useRankings";
import DisplayTable from "../components/tables/displayTable";

const columns = [
  { headerName: "Rank", field: "rank", sortable:"true"},
  { headerName: "Country", field: "country", sortable:"true", filter:"true"},
  { headerName: "Score", field: "score", sortable:"true"},
  { headerName: "Year", field: "year", sortable: "true"},
]

export default function Search(){
  const [search, setSearch] = useState('');
  const { rankings } = useRankings(search);

  return (
    <div>
      <div class="container">
        <h1>Find Out How Your Country Scored</h1>
      </div>
      <div>
        <SearchBar onSubmit={setSearch}/>
      </div>
      <div>
        <DisplayTable columns={columns} rows={rankings}/>
      </div>
    </div>
  );

}  