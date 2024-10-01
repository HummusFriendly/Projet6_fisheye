async function getPhotographers() {
    const res = await fetch('assets/data/photographers.json', { mode: "cors" });
    let data = await res.json();
    return { photographers: data.photographers, media: data.media };
}

async function displayData(photographers, media) {
    const urlParams = new URLSearchParams(window.location.search);
    const urlId = urlParams.get('id'); 
    const photographer = photographers.find((i) => i.id == urlId); 

    if (photographer) {
        const photographerMedia = media.filter((i) => i.photographerId === photographer.id);

        const photographerModel = photographerTemplate(photographer, photographerMedia);
        
        photographerModel.getUserCardDOM();
        photographerModel.getArticlesDom();
    }
}

async function init() {
    const { photographers, media } = await getPhotographers();
    displayData(photographers, media);
}

init();
