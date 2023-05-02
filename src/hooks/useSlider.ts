import {useState} from "react";

export const useSlider = (initPhotoUrlList: string[]) => {
    const [photos, setPhotos] = useState<string[]>(initPhotoUrlList)
    const [state, setState] = useState(0)

    const prevPhoto = () => {
        const newIndex = (state - 1 + photos.length) % photos.length;
        setState(newIndex);
    };

    const nextPhoto = () => {
        const newIndex = (state + 1) % photos.length;
        setState(newIndex);
    };

    const changePhoto = (index: number) => {
        setState(index)
    }

    const currentPhoto = photos[state]

    return {
        prevPhoto,
        nextPhoto,
        changePhoto,
        currentPhoto
    }
}