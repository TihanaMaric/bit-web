const endpoint = "https://hacker-news.firebaseio.com/v0/topstories.json";
export const getID = () => {
    return fetch(endpoint)
    .then(response => response.json())
    .then(id => id.slice(0, 10));
}