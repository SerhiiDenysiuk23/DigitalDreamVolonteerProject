import {useState} from "react";

export const useSlider = (initPhotoUrlList: string[], photosPerSlide: number = 1) => {
    const [photos, setPhotos] = useState<string[]>(initPhotoUrlList)
    const [state, setState] = useState(0)

    const slidesCount = Math.ceil(photos.length / photosPerSlide);

    const prevPhoto = () => {
        const newIndex = (state - 1 + slidesCount) % slidesCount;
        setState(newIndex);
    };

    const nextPhoto = () => {
        const newIndex = (state + 1) % slidesCount;
        setState(newIndex);
    };

    const changePhoto = (index: number) => {
        setState(index)
    }

    const getCurrentSlidePhotos = () => {
        const startIndex = state * photosPerSlide;
        const endIndex = startIndex + photosPerSlide;
        return photos.slice(startIndex, endIndex);
    };

    return {
        prevPhoto,
        nextPhoto,
        changePhoto,
        currentPhotoList: getCurrentSlidePhotos(),
        currentPhoto: getCurrentSlidePhotos()[0]
    }
}