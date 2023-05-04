import { createContext } from "react";

// // wreath
// import artIcon from "../../../public/assets/flowers-icons/art.png";
// import filmIcon from "../../../public/assets/flowers-icons/film.png";
// import brendIcon from "../../../public/assets/flowers-icons/places_.png";
// import placesIcon from "../../../public/assets/flowers-icons/places_.png";
// import musicIcon from "../../../public/assets/flowers-icons/music.png";
// // background
// import background0 from "../../../public/assets/background.png";
// import background1 from "../../../public/assets/background1.png";
// import background2 from "../../../public/assets/background2.png";
// import background3 from "../../../public/assets/background3.png";
// import background4 from "../../../public/assets/background4.png";
// import background5 from "../../../public/assets/background5.png";
// // girlImages
// import girl from "../../../public/assets/girl/girl1.png";
// import girlArt from "../../../public/assets/girl/girl1.png";
// import girlPhoto from "../../../public/assets/girl/girl1.png";
// import girlMusic from "../../../public/assets/girl/girl1.png";
// import girlFilm from "../../../public/assets/girl/girl1.png";
// import girlBrend from "../../../public/assets/girl/girl1.png";
// //clouds
// import cloud1 from "../../../public/assets/Clouds/cloud1of3.png";
// import cloud2 from "../../../public/assets/Clouds/cloud2of3.png";
// import cloud3 from "../../../public/assets/Clouds/cloud3of3.png";

interface WreathItem {
  id: number;
  src: string;
  href: string;
  className: string;
}

interface BackgroundPicture {
  src: string;
  className: string;
  id: number;
  opacity: number;
}

interface GirlImage {
  src: string;
  id: number;
  opacity: number;
  className: string;
}

interface Cloud {
  src: string;
  id: number;
}

interface InitialState {
  wreathOfGirl: WreathItem[];
  backgroundPictures: BackgroundPicture[];
  girlImages: GirlImage[];
  clouds: Cloud[];
}

let initState: InitialState = {
  wreathOfGirl: [
    { id: 1, src: "/assets/flowers-icons/art.png", href: "#art", className: "art" },
    { id: 2, src: "/assets/flowers-icons/film.png", href: "#film", className: "film" },
    { id: 3, src: "/assets/flowers-icons/brend.png", href: "#brend", className: "brend" },
    { id: 4, src: "/assets/flowers-icons/places_.png", href: "#places", className: "places" },
    { id: 5, src: "/assets/flowers-icons/music.png", href: "#music", className: "music" },
  ],
  backgroundPictures: [
    { src: "/assets/background.png", className: "bg0", id: 6, opacity: 1 },
    { src: "/assets/background1.png", className: "bg1", id: 1, opacity: 0 },
    { src: "/assets/background2.png", className: "bg2", id: 2, opacity: 0 },
    { src: "/assets/background3.png", className: "bg3", id: 3, opacity: 0 },
    { src: "/assets/background4.png", className: "bg4", id: 4, opacity: 0 },
    { src: "/assets/background5.png", className: "bg5", id: 5, opacity: 0 },
  ],
  girlImages: [
    { src: "/assets/girl/girl1.png", id: 1, opacity: 1, className: "girl" },
    { src: "/assets/girl/girl_art1.png", id: 2, opacity: 0, className: "artGirl" },
    { src: "/assets/girl/girl_video1.png", id: 3, opacity: 0, className: "filmGirl" },
    { src: "/assets/girl/girl_brend1.png", id: 4, opacity: 0, className: "brendGirl" },
    { src: "/assets/girl/girl_photo1.png", id: 5, opacity: 0, className: "photoGirl" },
    { src: "/assets/girl/girl_music1.png", id: 6, opacity: 0, className: "musicGirl" },
  ],
  clouds: [
    { src: "/assets/Clouds/cloud1of3.png", id: 1 },
    { src: "/assets/Clouds/cloud2of3.png", id: 2 },
    { src: "/assets/Clouds/cloud3of3.png", id: 3 },
  ],
};

export const Context = createContext(initState);
