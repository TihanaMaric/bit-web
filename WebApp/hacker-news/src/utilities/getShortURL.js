export  const getShortUrl = (url) => {
    let result;
    let splittedUrl = url.split("/");
    let mainUrl = splittedUrl[2];
    if (mainUrl.includes("www")) {
        result = mainUrl.slice(4, (mainUrl.length))
    } else {
        result = mainUrl.slice(0, (mainUrl.length))
    }
    return result;
}