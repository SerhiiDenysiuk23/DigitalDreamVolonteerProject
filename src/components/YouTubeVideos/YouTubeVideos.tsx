import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import style from "./YouTubeVideos.module.scss";

const Video = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "550",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />;
};

const YouTubeVideos = () => {
  return (
    <section className={`${style.youtubeVideos} main-block`}>
      <h3>Do you know about Ukrainian Video Clip?</h3>
      <Video />
    </section>
  );
};

export default YouTubeVideos;
