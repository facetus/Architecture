import React, { useState, useEffect, useRef } from "react";
import "./AudioPlayer.css";
import { useRecoilState } from "recoil";
import { autoPlayState } from "../../state";
import { cleanup } from "@testing-library/react";

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

  const [subtitleEn, setSubtitleEn] = useState("");
  const [splitedSubtitlesEn, setSplitedSubtitlesEn] = useState([]);
  const [autoPlay, setAutoPlay] = useRecoilState(autoPlayState);

  // Handle autoPlay and move to next audio
  useEffect(() => {
    if (!currentInfo) return;

    const endHandler = () => {
      moveNext(currentState);
    };

    const cleanSubtitles = () => {
      setSubtitle("");
      setSubtitleEn("");
    };

    audioPlayerRef.current.addEventListener("ended", cleanSubtitles);
    if (autoPlay && audioPlayerRef.current) {
      audioPlayerRef.current.addEventListener("ended", endHandler);
    }

    return () => {
      if (autoPlay && audioPlayerRef.current)
        audioPlayerRef.current.removeEventListener("ended", endHandler);
      audioPlayerRef.current.addEventListener("ended", cleanSubtitles);
    };
  }, [autoPlay, audioId]);

  // Split subtitles based on screen width
  useEffect(() => {
    if (!subtitle) {
      setSplitedSubtitles([]);
      return;
    }

    const width = window.screen.width;
    const charSize = 10;
    const space = width > 550 ? 0.5 : 0.9;
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

  // Split subtitles based on screen width
  useEffect(() => {
    if (!subtitleEn) {
      setSplitedSubtitlesEn([]);
      return;
    }

    const width = window.screen.width;
    const charSize = 10;
    const space = width > 550 ? 0.5 : 0.9;
    let acc = [];
    let line = "";

    subtitleEn.split(" ").forEach((word) => {
      if ((line.length + word.length) * charSize > width * space) {
        acc.push(line);
        line = word;
      } else {
        line = [line, word].join(" ");
      }
    });

    if (line) acc.push(line);
    setSplitedSubtitlesEn(acc);
  }, [subtitleEn]);

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

      const greekSubs = currentInfo.content.gr
        .filter(
          ({ startTime }) => startTime < audioPlayerRef.current.currentTime
        )
        .pop();

      if (greekSubs) setSubtitle(greekSubs.text);

      const englishSubs = currentInfo.content.en
        .filter(
          ({ startTime }) => startTime < audioPlayerRef.current.currentTime
        )
        .pop();

      if (englishSubs) setSubtitleEn(englishSubs.text);
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
          <div key={index} className="gr">
            {line}
          </div>
        ))}
        {splitedSubtitlesEn.map((line, index) => (
          <div key={index} className="en">
            {line}
          </div>
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
