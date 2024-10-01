function sortByPopularity(media, getArticlesDom) {
    const sortedMedia = [...media].sort((a, b) => b.likes - a.likes);
    getArticlesDom(sortedMedia);
}

function sortByDate(media, getArticlesDom) {
    const sortedMedia = [...media].sort((a, b) => new Date(b.date) - new Date(a.date));
    getArticlesDom(sortedMedia);
}

function sortByTitle(media, getArticlesDom) {
    const sortedMedia = [...media].sort((a, b) => a.title.localeCompare(b.title));
    getArticlesDom(sortedMedia);
}
