import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import DisplayTable from "../tables/displayTable";


export default function SearchResults(props) {
    return (
        <div>
            <h1>Your Results returned:</h1>
            <div>
                <DisplayTable />
            </div>
        </div>
    );
}