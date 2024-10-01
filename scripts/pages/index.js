async function getPhotographers() {
    const res = await fetch('assets/data/photographers.json', { mode: "cors" })
    let data = await res.json()
    return data.photographers
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {

    const photographers = await getPhotographers();
    displayData(photographers);
}

init();