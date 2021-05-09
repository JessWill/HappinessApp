import React, { useState, useEffect } from "react";

const API_URL = "http://131.181.190.87:3000/rankings"

export default function GetRankingsByQuery(search) {
    const API_URL = "http://131.181.190.87:3000/rankings"
    const url= `${API_URL}?country=${search}`


    return fetch(url)
        .then(res => res.json())
        .then((Object) =>
            Object.map((Object) => ({
                    rank: Object.rank,
                    country: Object.country,
                    score: Object.score,
                    year: Object.year
            }))
        );
}