function photographerTemplate(data) {
    
    const { name, portrait, tagline, country, city, id, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const link = document.createElement('a');
        link.setAttribute("href", `http://127.0.0.1:5500/Front-End-Fisheye/photographer.html?id=${id}`);
        const h1 = document.createElement('h1');
        h1.textContent = name;
        const h3 = document.createElement('h3');
        h3.innerHTML = `${city}, ${country}`;
        const h4 = document.createElement('h4');
        h4.innerHTML = `${tagline}`;
        const h5 = document.createElement('h5');
        h5.innerHTML = `${price}€/jour`;
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.classList.add('imgId');
        img.setAttribute("alt", name);
        link.appendChild(img);
        link.appendChild(h1);
        link.appendChild(h3);
        link.appendChild(h4);
        link.appendChild(h5);
        article.appendChild(link);

        return article;
    }

    return { name, picture, getUserCardDOM };
}