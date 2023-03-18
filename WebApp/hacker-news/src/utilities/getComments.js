export const getComments = (comments) => {
    if (comments === 0) {
        return `no comments`;
    } else if (comments === 1) {
        return `1 comment`;
    } else {
        return `${comments} comments`;
    }
}