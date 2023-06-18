import { createContext } from "react";

interface WreathItem {
  id: number;
  src: string;
  href: string;
  className: string;
  scale: number;
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

interface InitialState {
  wreathOfGirl: WreathItem[];
  backgroundPictures: BackgroundPicture[];
  girlImages: GirlImage[];
}

let initState: InitialState = {
  wreathOfGirl: [
    {
      id: 1,
      src: "/assets/flowers-icons/art.svg",
      href: "#art",
      className: "art",
      scale: 1,
    },
    {
      id: 2,
      src: "/assets/flowers-icons/film.svg",
      href: "#film",
      className: "film",
      scale: 1,
    },
    {
      id: 3,
      src: "/assets/flowers-icons/brend.svg",
      href: "#brend",
      className: "brend",
      scale: 1,
    },
    {
      id: 4,
      src: "/assets/flowers-icons/places.svg",
      href: "#places",
      className: "places",
      scale: 1,
    },
    {
      id: 5,
      src: "/assets/flowers-icons/music.svg",
      href: "#music",
      className: "music",
      scale: 1,
    },
    {
      id: 6,
      src: "/assets/flowers-icons/art.svg",
      href: "#illustrations",
      className: "illustrations",
      scale: 1,
    },
  ],
  backgroundPictures: [
    { src: "/assets/background.png", className: "bg0", id: 6, opacity: 1 },
    { src: "/assets/background1.png", className: "bg1", id: 1, opacity: 0 },
    { src: "/assets/background2.png", className: "bg2", id: 2, opacity: 0 },
    { src: "/assets/background3.png", className: "bg3", id: 3, opacity: 0 },
    { src: "/assets/background4.png", className: "bg4", id: 4, opacity: 0 },
    { src: "/assets/background5.png", className: "bg5", id: 5, opacity: 0 },
    { src: "/assets/background3.png", className: "bg6", id: 6, opacity: 0 },
  ],
  girlImages: [
    { src: "/assets/girl/girl1.png", id: 0, opacity: 1, className: "girl" },
    {
      src: "/assets/girl/girl_art1.png",
      id: 1,
      opacity: 0,
      className: "artGirl",
    },
    {
      src: "/assets/girl/girl_video1.png",
      id: 2,
      opacity: 0,
      className: "filmGirl",
    },
    {
      src: "/assets/girl/girl_brend1.png",
      id: 3,
      opacity: 0,
      className: "brendGirl",
    },
    {
      src: "/assets/girl/girl_photo1.png",
      id: 4,
      opacity: 0,
      className: "photoGirl",
    },
    {
      src: "/assets/girl/girl_music1.png",
      id: 5,
      opacity: 0,
      className: "musicGirl",
    },
    { src: "/assets/girl/girl1.png", id: 6, opacity: 0, className: "girl" },
  ],
};

export const Context = createContext(initState);
