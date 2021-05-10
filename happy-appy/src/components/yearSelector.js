import React, { useState } from "react";

export default function YearSelector(props) {
    const [innerYear, setInnerYear] = useState("");
    
    return (
        <div>
            <div class="dropdown is-active">
                <select 
                    id="dropdown" 
                    onChange= {(e) => {
                        e.preventDefault();
                        setInnerYear(e.target.value)
                    }
                    }>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                </select>
            </div>
            <div>
            <button 
            id="search-button" 
            type="button"
            onClick={()=> props.onSubmit(innerYear)}>
                Search
            </button>
            </div>
        </div>
    );
}