const images=document.querySelectorAll('img');

const rotateImage = () => {
    const firstImageSrc = images[0].src;
    const firstImageAlt = images[0].alt;

    for(let i= 0; i < images.length - 1; i++) {
        images[i].src = images[i + 1].src;
        images[i].alt = images[i + 1].alt;
    }

    images[images.length - 1].src = firstImageSrc;
    images[images.length - 1].alt = firstImageAlt;
}

setInterval(rotateImage, 1000);