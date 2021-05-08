import React, { useState } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const API_URL = "http://131.181.190.87:3000/"

export default function SearchBar(props) {
    const {onSearch} = props;
    const [searchText,setSearchText] = useState("")

    const handleInput = (e) => {
        const text = e.target.value
        setSearchText(searchText)
    }

    const handleEnterKeyPressed = (e) => {
        if(e.key === 'Enter'){
            onSearch(searchText)
        }
    }

    return (
        <div class="container is-max-desktop">
            <input
                aria-labelledby="search-button"
                class="input"
                type="text"
                placeholder="Search Factors"
                value = {searchText}
                onChange={handleInput}
                onKeyPress={handleEnterKeyPressed}
            />
        </div>
    );
}