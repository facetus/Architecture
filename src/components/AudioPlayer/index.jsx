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
  preloadedDataList,
}) => {
  // States and refs
  const audioPlayerRef = useRef(null);
  const subsRef = useRef(null);
  const [subsWidth, setSubsWidth] = useState(0);
  const [subtitle, setSubtitle] = useState("");
  const [splitedSubtitles, setSplitedSubtitles] = useState([]);

  const [subtitleEn, setSubtitleEn] = useState("");
  const [splitedSubtitlesEn, setSplitedSubtitlesEn] = useState([]);
  const [autoPlay, setAutoPlay] = useRecoilState(autoPlayState);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      // Update state with the new width
      if (entries && entries.length > 0) {
        const { width } = entries[0].contentRect;
        setSubsWidth(width);
      }
    });

    // Observe the div for changes in width
    if (subsRef.current) {
      observer.observe(subsRef.current);
    }

    return () => {
      // Cleanup: disconnect the observer
      observer.disconnect();
    };
  }, []); // Run effect only once

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
      setSplitedSubtitlesEn([]);
      return;
    }
    const charSize = 10;
    let acc = [];
    let line = "";

    subtitle.split(" ").forEach((word) => {
      if ((line.length + word.length) * charSize > subsWidth) {
        acc.push(line);
        line = word;
      } else {
        line = [line, word].join(" ");
      }
    });
    if (line) acc.push(line);

    setSplitedSubtitles(acc);

    acc = [];
    line = "";

    subtitleEn.split(" ").forEach((word) => {
      if ((line.length + word.length) * charSize > subsWidth) {
        acc.push(line);
        line = word;
      } else {
        line = [line, word].join(" ");
      }
    });
    if (line) acc.push(line);

    setSplitedSubtitlesEn(acc);
  }, [subtitle, subtitleEn, subsWidth]);

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
    console.log("audio", currentInfo);
    if (currentInfo && currentInfo.audio) {
      if (document.getElementById("langStyle").innerText.includes(".gr")) {
        audioPlayerRef.current.src = preloadedDataList[currentInfo.audio.en];
      } else {
        audioPlayerRef.current.src = preloadedDataList[currentInfo.audio.gr];
      }
      audioPlayerRef.current.play().catch((err) => {
        console.log(err);
      });
      setTimeout(() => {
        audioPlayerRef.current.play().catch((err) => {
          console.log(err);
        });
      }, 100);
      return () => {
        audioPlayerRef.current.pause();
      };
    }
  }, [currentInfo, preloadedDataList]);

  return (
    <div className="bottom center-container">
      <div className="subtitle" ref={subsRef}>
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
      <audio id="audio-player" ref={audioPlayerRef} autoPlay />
    </div>
  );
};

export default AudioPlayer;
