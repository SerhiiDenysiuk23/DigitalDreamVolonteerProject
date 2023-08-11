import { useEffect, useState } from "react";
import useSound from "use-sound";
import imagine from "./music/ImagineDragonsNatural.mp3";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import style from "./TestPlayer.module.scss";

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: "",
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState<number | undefined>();

  const [play, { pause, duration, sound }] = useSound(imagine);

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min.toString(),
        sec: secRemain.toString(),
      });
    }
  }, [isPlaying, duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek());
        const min = Math.floor(sound.seek() / 60);
        const sec = Math.floor(sound.seek() % 60);
        setCurrTime({
          min: min.toString(),
          sec: sec.toString(),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={style.wrapperPlayer}>
      <div className={style.musicCard}>
        <div className={style.cover}>
          <img
            src="https://hosseinghanbari.ir/other/music-player/autumn.jpg"
            alt=""
          />
        </div>
        <div>
          <div>
            {!isPlaying ? (
              <button className={style.playButton} onClick={playingButton}>
                <IconContext.Provider
                  value={{ size: "25px", color: "#27AE60" }}
                >
                  <FaPlay className={style.btn} />
                </IconContext.Provider>
              </button>
            ) : (
              <button className={style.playButton} onClick={playingButton}>
                <IconContext.Provider
                  value={{ size: "25px", color: "#27AE60" }}
                >
                  <FaPause className={style.btn} />
                </IconContext.Provider>
              </button>
            )}
          </div>
          <div className="time">
            <p>
              {currTime.min}:{currTime.sec}
            </p>
            <p>
              {time.min}:{time.sec}
            </p>
          </div>
          <input
            type="range"
            min={0}
            max={duration ? duration / 1000 : 0}
            defaultValue={0}
            value={seconds}
            className="timeline"
            onChange={(e) => {
              if (sound) {
                sound.seek(Number(e.target.value));
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
