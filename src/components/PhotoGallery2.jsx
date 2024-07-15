import React, { useState, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import 'tailwindcss/tailwind.css';

// Importing the images with correct paths
import img1 from '../assets/i-hmPbjtG-4K.jpg';
import img2 from '../assets/i-PVzgVvr-X3.jpg';
import img3 from '../assets/i-thqsFzg-X3.jpg';
import img4 from '../assets/i-WNkLZFq-4K.jpg';
import img5 from '../assets/Paris Paul Cezanne-22.jpg';
import img6 from '../assets/Paris-7-X3.jpg';
import img7 from '../assets/Preston-1-X2.jpg';
import img8 from '../assets/Spring Mountain-8.jpg';
import img9 from '../assets/St Paul-53.jpg';
import img10 from '../assets/Wells Fargo Fitness Center -11-X3.jpg';
import img11 from '../assets/Wells Fargo Fitness Center -7-X3.jpg';
import img12 from '../assets/WF Glendale final - jpg-1.jpg';
import img13 from '../assets/WF Glendale final - jpg-22.jpg';
import img14 from '../assets/WF Glendale final - jpg-7.jpg';
import img15 from '../assets/image1.jpg';

const photos = [
    { src: img1, width: 3840, height: 2563 },
    { src: img2, width: 1600, height: 1068 },
    { src: img3, width: 1600, height: 1068 },
    { src: img4, width: 3840, height: 2563 },
    { src: img5, width: 4077, height: 4077 },
    { src: img6, width: 1600, height: 1068 },
    { src: img7, width: 1280, height: 854 },
    { src: img8, width: 3191, height: 2127 },
    { src: img9, width: 5504, height: 8256 },
    { src: img10, width: 1600, height: 1068 },
    { src: img11, width: 1600, height: 1068 },
    { src: img12, width: 5076, height: 3384 },
    { src: img13, width: 5504, height: 5504 },
    { src: img14, width: 7362, height: 4908 },
    { src: img15, width: 6032, height: 4021 }
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
