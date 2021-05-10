import React from "react";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";


export default function DisplayTable(props) {
    return(
       <div class="container is-max-desktop"> 
                <div 
                    class="ag-theme-balham"
                    style={{
                        height:"906px",
                        width:"801px"
                        }}
                    >
                        <AgGridReact
                            columnDefs={props.columns}
                            rowData={props.rows}
                            pagination={true}
                            paginationPageSize={30}
                            />
                    </div>
        </div>
    );
}