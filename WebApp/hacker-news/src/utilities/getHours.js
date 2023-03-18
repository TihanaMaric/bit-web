export const miliToHours = (miliseconds) => {
    let hours = Math.floor((miliseconds / (1000 * 60 * 60)));
    let days = "";
    if (hours > 23) {
        days = Math.floor(hours / 24);
        return `${days} days ago`;
    } else {
        return `${hours} hours ago`;
    }
}