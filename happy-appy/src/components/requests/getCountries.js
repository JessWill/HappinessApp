export default function GetCountries(url) {

    return fetch(url)
        .then(res => res.json())
        .then((Object) =>
            Object.map((Object) => ({
                    country: Object,
            }))
        );
}