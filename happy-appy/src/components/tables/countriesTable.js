import React, {useState, useEffect}from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import DisplayTable from "./displayTable";
import GetCountries from "../requests/getCountries";

const API_URL = "http://131.181.190.87:3000/"

export default function CountriesTable(props) {
    const [rowData, setRowData] = useState([]);
    const url = `${API_URL}${props.api}`
    
    useEffect(() => {
        GetCountries(url)
        .then(Objects => setRowData(Objects))
    })

    return(
        <DisplayTable columns={props.columns} rows={rowData}/>
    );
}