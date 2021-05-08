import React, { useState, useEffect } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import DisplayTable from "./displayTable";

const API_URL = "http://131.181.190.87:3000/"

export default function FactorsTable(props) {
    const [rowData, setRowData] = useState([]);
    const url = `${API_URL}${props.api}${props.year}`
    const token = localStorage.getItem("token");
    const headers = {
        accept: "application/json",
        "Content-Type": "applciation/json",
        Authorization: `Bearer ${token}`
    }

    useEffect(() => {
        fetch(url, { headers })
            .then(res => res.json())
            .then((Object) =>
                Object.map(Object => {
                    return {
                        rank: Object.rank,
                        country: Object.country,
                        score: Object.score,
                        economy: Object.economy,
                        family: Object.family,
                        health: Object.health,
                        freedom: Object.freedom,
                        generosity: Object.generosity,
                        trust: Object.trust
                    };
                })
            )
            .then(Objects => setRowData(Objects))
    })


    return (
        <DisplayTable columns={props.columns} rows={rowData}/>
    );
}