export default function GetFactors(url) {
    const token = localStorage.getItem("token");
    const headers = {
        accept: "application/json",
        "Content-Type": "applciation/json",
        Authorization: `Bearer ${token}`
    }
    return fetch(url, {headers})
        .then(res => res.json())
        .then((Object) =>
            Object.map((Object) => ({
                rank: Object.rank,
                country: Object.country,
                score: Object.score,
                economy: Object.economy,
                family: Object.family,
                health: Object.health,
                freedom: Object.freedom,
                generosity: Object.generosity,
                trust: Object.trust
            }))
        );
}