import React, { useState, useEffect } from "react";
import GetRankingsByQuery from "../requests/getRankingsByQuery";

const API_URL = "http://131.181.190.87:3000/rankings"

export default function useRankings(search) {
    const[loading, setLoading] = useState(true);
    const[rankings, setRankings] = useState([]);
    const[error, setError] = useState(null);

    useEffect(() => {
        GetRankingsByQuery(search)
        .then((rankings) => {
            setRankings(rankings);
        })
        .catch((e) => {
            setError(e);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [search]);

    return {
        loading,
        rankings,
        error
    }
}