import React, { useState, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import 'tailwindcss/tailwind.css';

const photos = [

    { src: './assets/i-hmPbjtG-4K.jpg', width: 3840, height: 2563 },
    { src: './assets/i-PVzgVvr-X3.jpg', width: 1600, height: 1068 },
    { src: './assets/i-thqsFzg-X3.jpg', width: 1600, height: 1068 },
    { src: './assets/i-WNkLZFq-4K.jpg', width: 3840, height: 2563 },
    { src: './assets/Paris Paul Cezanne-22.jpg', width: 4077, height: 4077 },
    { src: './assets/Paris-7-X3.jpg', width: 1600, height: 1068 },
    { src: './assets/Preston-1-X2.jpg', width: 1280, height: 854 },
    { src: './assets/Spring Mountain-8.jpg', width: 3191, height: 2127 },
    { src: './assets/St Paul-53.jpg', width: 5504, height: 8256 },
    { src: './assets/Wells Fargo Fitness Center -11-X3.jpg', width: 1600, height: 1068 },
    { src: './assets/Wells Fargo Fitness Center -7-X3.jpg', width: 1600, height: 1068 },
    
    { src: './assets/WF Glendale final - jpg-1.jpg', width: 5076, height: 3384 },
    { src: './assets/WF Glendale final - jpg-22.jpg', width: 5504, height: 5504 },
    { src: './assets/WF Glendale final - jpg-7.jpg', width: 7362, height: 4908 },
    { src: './assets/image1.jpg', width: 6032, height: 4021 }
];

function PhotoGallery2() {
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

export default PhotoGallery2;
