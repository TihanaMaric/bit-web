const endpoint = "https://randomuser.me/api/?results=15";

export const getUsers = () => {
    return fetch(endpoint)
        .then(response => response.json())
        .then(users => users.results)
}
