import React, {useState, useEffect}from "react";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

export default function DataTable() {
    const [rowData, setRowData] = useState([]);

    const columns = [
        { headerName: "Rank", field: "rank", sortable:"true"},
        { headerName: "Country", field: "country", sortable:"true", filter:"true"},
        { headerName: "Score", field: "score", sortable:"true"},
        { headerName: "Year", field: "year", sortable: "true"},
    ]
    
    useEffect(() => {
        fetch("http://131.181.190.87:3000/rankings")
        .then(res => res.json())
        .then((Object) =>
            Object.map(Object=>{
                return {
                    rank: Object.rank,
                    country: Object.country,
                    score: Object.score,
                    year: Object.year
                };
            })
        )
        .then(Objects => setRowData(Objects))
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
                            pagination={true}
                            paginationPageSize={20}
                            />
                    </div>
        </div>
    );
}