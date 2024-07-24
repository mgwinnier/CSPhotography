import React, { useState, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import 'tailwindcss/tailwind.css';

// Importing the images with correct paths
import img1 from '../assets/10911 Dry Stack-31.jpg';
import img2 from '../assets/927 Belle Oaks-10.jpg';
import img3 from '../assets/Congress-13-X3.jpg';
import img4 from '../assets/Westover Hills -1.jpg';
import img5 from '../assets/Heifer-6.jpg';
import img6 from '../assets/FP 4 large conf jpg-X3-2.jpg';
import img7 from '../assets/Spring Mountain-8.jpg';
import img8 from '../assets/i-hmPbjtG-4K.jpg';
import img9 from '../assets/i-PVzgVvr-X3.jpg';
import img10 from '../assets/Congress-4-X3.jpg';
import img11 from '../assets/i-WNkLZFq-4K.jpg';
import img12 from '../assets/Paris Paul Cezanne-22.jpg';
import img13 from '../assets/Paris-7-X3.jpg';
import img14 from '../assets/Preston-1-X2.jpg';
import img15 from '../assets/St Paul-53.jpg';
import img16 from '../assets/Frisco-15.jpg';
import img17 from '../assets/Wells Fargo Fitness Center -7-X3.jpg';
import img18 from '../assets/WF Glendale final - jpg-1.jpg';
import img19 from '../assets/WF Glendale final - jpg-22.jpg';
import img20 from '../assets/WF Glendale final - jpg-7.jpg';
import img21 from '../assets/image1.jpg';
import img22 from '../assets/Frisco-43.jpg';
import img23 from '../assets/Frisco-45.jpg';
import img24 from '../assets/Frisco-58.jpg';
import img25 from '../assets/WF Sendero Marketplace Exterior -7.jpg';

const allPhotos = [
    { src: img1, width: 6172, height: 4115 },
    { src: img2, width: 6192, height: 4128 },
    { src: img3, width: 1600, height: 1068 },
    { src: img4, width: 6192, height: 4128 },
    { src: img5, width: 5504, height: 8256 },
    { src: img6, width: 1600, height: 1068 },
    { src: img7, width: 3191, height: 2127 },
    { src: img8, width: 3840, height: 2563 },
    { src: img9, width: 1600, height: 1068 },
    { src: img10, width: 1600, height: 1068 },
    { src: img11, width: 3840, height: 2563 },
    { src: img12, width: 4077, height: 4077 },
    { src: img13, width: 1600, height: 1068 },
    { src: img14, width: 1280, height: 854 },
    { src: img15, width: 5504, height: 8256 },
    { src: img16, width: 8244 , height: 5496 },
    { src: img17, width: 1600, height: 1068 },
    { src: img18, width: 5076, height: 3384 },
    { src: img19, width: 5504, height: 5504 },
    { src: img20, width: 7362, height: 4908 },
    { src: img21, width: 6032, height: 4021 },
    { src: img22, width: 8256, height: 5504 },
    { src: img23, width: 7737, height: 5158 },
    { src: img24, width: 8256, height: 5504 },
    { src: img25, width: 8256, height: 5504 },
];

// Remove duplicate images based on src
const uniquePhotos = Array.from(new Set(allPhotos.map(photo => photo.src)))
    .map(src => {
        return allPhotos.find(photo => photo.src === src);
    });

function PhotoGallery() {
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
    const moveNext = () => setCurrentImage((currentImage + 1) % uniquePhotos.length);
    const movePrev = () => setCurrentImage((currentImage + uniquePhotos.length - 1) % uniquePhotos.length);

    return (
        <div className="p-5">
            <Gallery photos={uniquePhotos} onClick={openLightbox} />
            {isOpen && (
                <Lightbox
                    mainSrc={uniquePhotos[currentImage].src}
                    nextSrc={uniquePhotos[(currentImage + 1) % uniquePhotos.length].src}
                    prevSrc={uniquePhotos[(currentImage + uniquePhotos.length - 1) % uniquePhotos.length].src}
                    onCloseRequest={closeLightbox}
                    onMovePrevRequest={movePrev}
                    onMoveNextRequest={moveNext}
                />
            )}
        </div>
    );
}

export default PhotoGallery;
