export const getStoryData = (id) => {
    let endpoint = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
    return fetch(endpoint)
    .then(response => response.json())
    .then(story => story)
}