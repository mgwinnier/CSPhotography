import React, { useState, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import 'tailwindcss/tailwind.css';

const photos = [
    { src: './assets/10911 Dry Stack-31.jpg', width: 6172, height: 4115 },
    { src: './assets/927 Belle Oaks-10.jpg', width: 6192, height: 4128 },
    { src: './assets/Congress-13-X3.jpg', width: 1600, height: 1068 },
    { src: './assets/Westover Hills -1.jpg', width: 6192, height: 4128 },
    { src: './assets/Elevator lobby Ross ave-1-X3.jpg', width: 1600, height: 1067 },
    { src: './assets/FP 4 large conf jpg-X3-2.jpg', width: 1600, height: 1068 },
    { src: './assets/i-hmPbjtG-4K.jpg', width: 3840, height: 2563 },
];

function PhotoGallery1() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [shouldOpen, setShouldOpen] = useState(false);

    useEffect(() => {
        if (shouldOpen) {
            setIsOpen(true);
            setShouldOpen(false); // Reset the trigger
        }
    }, [shouldOpen, currentImage]);

    const openLightbox = (event, { photo, index }) => {
        event.preventDefault();
        if (!isOpen) {
            setCurrentImage(index);
            setShouldOpen(true); // Set to trigger useEffect
        }
    };

    const closeLightbox = () => setIsOpen(false);
    const moveNext = () => setCurrentImage((currentImage + 1) % photos.length);
    const movePrev = () => setCurrentImage((currentImage + photos.length - 1) % photos.length);

    return (
        <div className="p-5">
            <Gallery photos={photos.map(photo => ({ src: photo.src, width: photo.width, height: photo.height }))} onClick={openLightbox} />
            {isOpen && (
                <Lightbox
                    mainSrc={photos[currentImage].src}
                    nextSrc={photos[(currentImage + 1) % photos.length].src}
                    prevSrc={photos[(currentImage + photos.length - 1) % photos.length].src}
                    onCloseRequest={closeLightbox}
                    onMovePrevRequest={movePrev}
                    onMoveNextRequest={moveNext}
                />
            )}
        </div>
    );
}

export default PhotoGallery1;
