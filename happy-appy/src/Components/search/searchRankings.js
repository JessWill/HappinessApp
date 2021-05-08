import React from "react";

const API_URL = "http://131.181.190.87:3000/"

export default function SearchRankings(search) {
    const url = `${API_URL}${search.ep}?${search.query}${search.term}`

    const token = localStorage.getItem("token");
    const headers ={
        accept:"application/json",
        "Content-Type": "applciation/json",
        Authorization: `Bearer ${token}`
    }

    return fetch(url,{headers})
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
}