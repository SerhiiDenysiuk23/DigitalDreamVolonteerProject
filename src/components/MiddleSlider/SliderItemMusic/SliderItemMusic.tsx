import styles from "./SliderItemMusic.module.scss";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { FaPlay, FaVolumeUp } from "react-icons/fa";
import { BsPauseFill } from "react-icons/bs";

const SliderItemMusic = () => {
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const seekbarRef = useRef<any>(null);
  const currentTimeRef = useRef<HTMLSpanElement | null>(null);
  const durationRef = useRef<HTMLSpanElement | null>(null);

  const [music, setMusic] = useState(musicRef.current);
  const [duration, setDuration] = useState("0:0");
  const [seekbar, setSeekbar] = useState(seekbarRef.current);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:0");
  const [volume, setVolume] = useState(80);

  useEffect(() => {
    setMusic(musicRef.current);
    setSeekbar(seekbarRef.current);
    setDuration("0:0");
    setCurrentTime("0:0");
  }, [seekbar]);

  const handleSeekbar = () => {
    if (music && seekbar) {
      music.ontimeupdate = () => {
        seekbar.value = music.currentTime.toString();
        seekbar.max = music.duration.toString();
        const ds = parseInt((music.duration % 60).toString(), 10);
        const dm = parseInt(((music.duration / 60) % 60).toString(), 10);
        const cs = parseInt((music.currentTime % 60).toString(), 10);
        const cm = parseInt(((music.currentTime / 60) % 60).toString(), 10);
        setDuration(`${dm}:${ds}`);
        setCurrentTime(`${cm}:${cs}`);
      };
    }
  };

  const handleChangeSeekbar = () => {
    if (music && seekbar) {
      music.currentTime = parseInt(seekbar.value);
    }
  };

  const handlePlay = () => {
    if (music) {
      if (music.paused) {
        music.play();
        setIsPlaying(true);
      } else {
        music.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVolume = () => {
    setVolume((prevVolume) => (prevVolume === 0 ? 80 : 0));
  };

  return (
    <div className={styles.wrapperPlayer}>
      <div className={styles.player}>
        <div className={styles.cover}>
          <img
            src="https://hosseinghanbari.ir/other/music-player/autumn.jpg"
            alt=""
          />
        </div>
        <div className={styles.musicBox}>
          <span
            className={styles.play}
            // {`play ${isPlaying ? "pause" : "play"}`}
            onClick={handlePlay}
          >
            <i className={styles.materialIcons}>
              <FaPlay className={styles.faPlay} />
            </i>
          </span>
          <div className={styles.info}>
            <div className={styles.title}>Artist - Name Song</div>
          </div>
          <div className={styles.audioTrack}>
            <input
              ref={seekbarRef}
              step="1"
              className={styles.seekbar}
              type="range"
              min="0"
              max="1000"
              onInput={handleSeekbar}
              onChange={handleChangeSeekbar}
            />
            <audio ref={musicRef} className={styles.musicElement}>
              <source
                src="https://hosseinghanbari.ir/other/music-player/autumn.mp3"
                type="audio/mp3"
              />
            </audio>
            <span ref={currentTimeRef} className={styles.currentTime}>
              {currentTime}
            </span>
            <span ref={durationRef} className={styles.duration}>
              {duration}
            </span>
          </div>
        </div>
        <div className={styles.volumeBox}>
          <input
            type="range"
            className={styles.volumeRange}
            step="1"
            value={volume}
            min="0"
            max="100"
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>
        <div className={styles.btnBox}>
          <i
            className={`materialIcons volume ${volume === 0 ? "active" : ""}`}
            onClick={handleVolume}
          >
            <FaVolumeUp className="FaVolume" />
          </i>
        </div>
      </div>
    </div>
  );
};
export default SliderItemMusic;
