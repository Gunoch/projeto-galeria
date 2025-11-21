import { useState } from "react";
import { IMAGES } from "../data/images.js"
import ImagePreview from "./ImagePreview";
import ThumbnailStrip from "./ThumbnailStrip.jsx";
import Controls from "./Controls.jsx";

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentImage = IMAGES[currentIndex];

    function showPrevious() {
        setCurrentIndex((index => index === 0 ? IMAGES.length - 1 : index -1));
    }

    function showNext() {
        setCurrentIndex((index => index === IMAGES.length - 1 ? 0 : index + 1));
    }

    function surpriseMe(){
        const random = Math.floor(Math.random() * IMAGES.length)
        setCurrentIndex(random);
    }

    function handleSelect(index){
        setCurrentIndex(index);
    }

    return (
        <div className="gallery">
            <ImagePreview image={currentImage} />
            <Controls 
                current={currentImage+1}
                total={IMAGES.length}
                onPrevious={showPrevious}
                onNext={showNext}
                onSurprise={surpriseMe}            
            />
            <ThumbnailStrip 
                images={IMAGES}
                currentIndex={currentIndex}
                onSelect={handleSelect}
            />
        </div>
    );
}

