function photographerTemplate(photographer, media) {
    const { name, portrait, tagline, country, city, price } = photographer;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const photographHeader = document.querySelector('.photograph-header');
        const textDiv = document.createElement('div');
        textDiv.classList.add('texts');
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        img.classList.add('imgId');
        img.setAttribute('alt', name);
        const h2 = document.createElement('h2');
        h2.textContent = name;
        h2.classList.add('titleId');
        const h3 = document.createElement('h3');
        h3.innerHTML = `${city}, ${country}`;
        const h4 = document.createElement('h4');
        h4.innerHTML = tagline;
        textDiv.appendChild(h2);
        textDiv.appendChild(h3);
        textDiv.appendChild(h4);
        photographHeader.prepend(textDiv);
        photographHeader.appendChild(img);
    }

    function getArticlesDom(sortedMedia = media) {
        const mediaContainer = document.querySelector('.photographer_media');
        mediaContainer.innerHTML = '';

        let totalLikes = sortedMedia.reduce((sum, item) => sum + item.likes, 0);

        const divLikePrice = document.querySelector('.like-price-fixed') || document.createElement('div');
        divLikePrice.classList.add('like-price-fixed');

        if (!document.querySelector('.like-price-fixed')) {
            document.body.prepend(divLikePrice);
        }

        const likePriceWrapper = divLikePrice.querySelector('.like-price-wrapper') || document.createElement('div');
        likePriceWrapper.classList.add('like-price-wrapper');

        if (!divLikePrice.querySelector('.like-price-wrapper')) {
            divLikePrice.prepend(likePriceWrapper);
        }

        const likePriceText = likePriceWrapper.querySelector('.like-price') || document.createElement('span');
        likePriceText.classList.add('like-price');
        likePriceText.textContent = `${totalLikes}`;

        if (!likePriceWrapper.querySelector('.like-price')) {
            likePriceWrapper.appendChild(likePriceText);
        }

        const imgBheart = likePriceWrapper.querySelector('.black-heart') || document.createElement('img');
        imgBheart.setAttribute("src", `assets/images/heart-black.png`);
        imgBheart.classList.add('black-heart');

        if (!likePriceWrapper.querySelector('.black-heart')) {
            likePriceWrapper.appendChild(imgBheart);
        }

        const priceDay = divLikePrice.querySelector('.price-day') || document.createElement('h4');
        priceDay.classList.add('price-day');
        priceDay.textContent = `${price}€ / jour`;

        if (!divLikePrice.querySelector('.price-day')) {
            divLikePrice.appendChild(priceDay);
        }

        function updateTotalLikes(amount) {
            totalLikes += amount;
            likePriceText.textContent = `${totalLikes}`;
        }
        
sortedMedia.forEach((element, index) => {
        const { title, likes } = element;
        const article = document.createElement('article');
        const mediaElement = createMedia(element); 
        mediaElement.addEventListener('click', () => {
            openImageSlider(index, sortedMedia); 
        });

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('titleDiv');
        const likeDiv = document.createElement('div');
        likeDiv.classList.add('likeDiv');
        const h2 = document.createElement('h2');
        h2.textContent = title;
        let currentLikes = likes;
        const h3 = document.createElement('h3');
        h3.textContent = `${currentLikes} `;
        const buttonHeart = document.createElement('button');
        buttonHeart.type = 'button';
        buttonHeart.classList.add('img-heart');
        buttonHeart.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                currentLikes--;
                h3.textContent = `${currentLikes} `;
                updateTotalLikes(-1);
            } else {
                this.classList.add('active');
                currentLikes++;
                h3.textContent = `${currentLikes} `;
                updateTotalLikes(1);
            }
        });
        likeDiv.appendChild(h3);
        likeDiv.appendChild(buttonHeart);
        titleDiv.appendChild(h2);
        article.appendChild(mediaElement);
        article.appendChild(titleDiv);
        titleDiv.appendChild(likeDiv);
        mediaContainer.appendChild(article);
    });
}
    document.querySelector('.pop').addEventListener('click', () => sortByPopularity(media, getArticlesDom));
    document.querySelector('.date').addEventListener('click', () => sortByDate(media, getArticlesDom));
    document.querySelector('.title_trier').addEventListener('click', () => sortByTitle(media, getArticlesDom));
    document.querySelector('.trier').addEventListener('click', function () {
        const rectangle = document.getElementById('rectangle');
        rectangle.classList.toggle('visible');
    });
    return { getUserCardDOM, getArticlesDom };
}



