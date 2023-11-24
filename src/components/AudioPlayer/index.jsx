import React, { useState, useEffect, useRef } from "react";
import "./AudioPlayer.css";
import { useRecoilState } from "recoil";
import { autoPlayState } from "../../state";

const AudioPlayer = ({
  audioId,
  currentInfo,
  setCurrentStateTimeProgress,
  moveNext,
  currentState,
}) => {
  // States and refs
  const audioPlayerRef = useRef(null);
  const [subtitle, setSubtitle] = useState("");
  const [splitedSubtitles, setSplitedSubtitles] = useState([]);
  const [autoPlay, setAutoPlay] = useRecoilState(autoPlayState);

  // Handle autoPlay and move to next audio
  useEffect(() => {
    if (!currentInfo) return;

    const endHandler = () => {
      moveNext(currentState);
    };

    if (autoPlay && audioPlayerRef.current) {
      audioPlayerRef.current.addEventListener("ended", endHandler);
    }

    return () => {
      if (autoPlay && audioPlayerRef.current)
        audioPlayerRef.current.removeEventListener("ended", endHandler);
    };
  }, [autoPlay, audioId]);

  // Split subtitles based on screen width
  useEffect(() => {
    if (!subtitle) return;

    const width = window.screen.width;
    const charSize = 10;
    const space = 0.8;
    let acc = [];
    let line = "";

    subtitle.split(" ").forEach((word) => {
      if ((line.length + word.length) * charSize > width * space) {
        acc.push(line);
        line = word;
      } else {
        line = [line, word].join(" ");
      }
    });

    if (line) acc.push(line);
    setSplitedSubtitles(acc);
  }, [subtitle]);

  // Subtitles and Audio progress
  useEffect(() => {
    if (!currentInfo) return;

    const handleTimeUpdate = () => {
      const currentStateTime =
        audioPlayerRef.current.currentTime / audioPlayerRef.current.duration;

      setCurrentStateTimeProgress(currentStateTime);

      if (currentStateTime >= 1) {
        setSubtitle("");
        return;
      }

      const p = currentInfo.content.gr
        .filter(
          ({ startTime }) => startTime < audioPlayerRef.current.currentTime
        )
        .pop();

      if (p) setSubtitle(p.text);
    };

    audioPlayerRef.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioPlayerRef.current.removeEventListener(
        "timeupdate",
        handleTimeUpdate
      );
    };
  }, [currentInfo, setCurrentStateTimeProgress]);

  // Audio play and cleanup
  useEffect(() => {
    audioPlayerRef.current.play().catch(() => {});
    return () => {
      audioPlayerRef.current.pause();
    };
  }, [audioId]);

  return (
    <div className="bottom center-container">
      <div className="subtitle">
        {splitedSubtitles.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <audio
        id="audio-player"
        src={`media/audio/gr/${audioId}.m4a`}
        ref={audioPlayerRef}
      />
    </div>
  );
};

export default AudioPlayer;
