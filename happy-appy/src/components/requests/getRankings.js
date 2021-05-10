export default function GetRankings(url) {

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