function openImageSlider(currentIndex, sortedMedia) {
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');
    document.body.appendChild(sliderContainer);

    let displayMedia;

    function loadMedia(index) {
        if (displayMedia) {
            sliderContainer.removeChild(displayMedia);
        }

        if (sortedMedia[index].image) {
            displayMedia = document.createElement('img');
            displayMedia.setAttribute("src", `assets/photos/${sortedMedia[index].image}`);
            displayMedia.setAttribute('alt', sortedMedia[index].title);
        }
        else if (sortedMedia[index].video) {
            displayMedia = document.createElement('video');
            displayMedia.setAttribute("src", `assets/videos/${sortedMedia[index].video}`);
            displayMedia.setAttribute('controls', true);
            displayMedia.setAttribute('alt', sortedMedia[index].title);
        }

        sliderContainer.insertBefore(displayMedia, imageTitle); 
    }

    const imageTitle = document.createElement('div');
    imageTitle.classList.add('image-title');
    imageTitle.textContent = sortedMedia[currentIndex].title;
    sliderContainer.appendChild(imageTitle);

    loadMedia(currentIndex); 

    const leftArrow = document.createElement('img');
    leftArrow.classList.add('arrow-left');
    leftArrow.setAttribute('src', 'assets/icons/next.png');
    leftArrow.setAttribute('alt', 'Précédent');
    leftArrow.style.transform = 'rotate(180deg)'; 
    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + sortedMedia.length) % sortedMedia.length;
        loadMedia(currentIndex); 
        imageTitle.textContent = sortedMedia[currentIndex].title;
    });
    sliderContainer.appendChild(leftArrow);

    const rightArrow = document.createElement('img');
    rightArrow.classList.add('arrow-right');
    rightArrow.setAttribute('src', 'assets/icons/next.png');
    rightArrow.setAttribute('alt', 'Suivant');
    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % sortedMedia.length;
        loadMedia(currentIndex); 
        imageTitle.textContent = sortedMedia[currentIndex].title;
    });
    sliderContainer.appendChild(rightArrow);

    const closeButton = document.createElement('img');
    closeButton.classList.add('close-button');
    closeButton.setAttribute('src', 'assets/icons/closeModal.png');
    closeButton.setAttribute('alt', 'Fermer');

    closeButton.addEventListener('click', () => {
        document.body.removeChild(sliderContainer);
    });
    sliderContainer.appendChild(closeButton);
}
