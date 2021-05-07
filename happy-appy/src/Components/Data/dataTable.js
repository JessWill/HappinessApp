import React, {useState, useEffect}from "react";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

export default function DataTable() {
    const [rowData, setRowData] = useState([]);

    const columns = {
        columns:[
            { headerName: "Rank", field: "rank", sortable:"true"},
            { headerName: "Country", field: "country", sortable:"true", filter:"true"},
            { headerName: "Score", field: "score", sortable:"true"},
            { headerName: "Year", field: "year", sortable: "true"},
    
        ],
      } 

    useEffect(() => {
        fetch("http://131.181.190.87:3000/rankings")
        .then(res => res.json())
        .then(data => data.rankings)
        .then(rankings =>
            rankings.map(ranking=>{
                return {
                    rank: ranking.rank,
                    country: ranking.country,
                    score: ranking.score,
                    year: ranking.year
                };
            })
        )
        .then(rankings => setRowData(rankings))
    })

    
    return(
       <div class="container is-max-desktop"> 
                <div 
                    class="ag-theme-balham"
                    style={{
                        height:"600px",
                        width:"900px"
                        }}
                    >
                        <AgGridReact
                            columnDefs={columns}
                            rowData={rowData}
                            pagination={true}/>
                    </div>
        </div>
    );
}