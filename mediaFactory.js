function createMedia(data) {
    const mediaElement = document.createElement('div');
    
    const baliseA = document.createElement('a');
    baliseA.setAttribute('href', data.link || '#');

    if (data.image) {
        const img = document.createElement('img');
        img.setAttribute('src', `assets/photos/${data.image}`);
        img.classList.add('imgGal');
        img.setAttribute('alt', data.title || 'Media image');
        baliseA.appendChild(img);
    } else if (data.video) {
        const video = document.createElement('video');
        video.setAttribute('src', `assets/videos/${data.video}`);
        video.setAttribute('controls', true);
        video.classList.add('imgGal'); 
        baliseA.appendChild(video);
    } else {
        throw new Error("Unknown data format: Expected 'image' or 'video'.");
    }
    
    mediaElement.appendChild(baliseA);
    
    return mediaElement;
}
