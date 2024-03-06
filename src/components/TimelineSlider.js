import React, { useState, useRef, useEffect } from "react";

export const TimelineSlider = ({
  handleChange,
  handlePlayPause,
  value,
  minTimestamp = 1674221811,
  maxTimestamp = 1674249811,
  step = 1,
}) => {
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef(null);
  useEffect(() => {
    setPlaying(true); // Start playing when component mounts
  }, []);
  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        handleChange(value + step);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [playing, value, handleChange, step]);

  const handleInput = (e) => {
    handleChange && handleChange(parseInt(e.target.value));
  };

  const togglePlayPause = () => {
    setPlaying(!playing);
    handlePlayPause && handlePlayPause(!playing);
  };

  return (
    <div className="timeline-slider">
      <input
        type="range"
        min={minTimestamp}
        max={maxTimestamp}
        value={value}
        step={step}
        onChange={handleInput}
      />
      <div>
        <button onClick={togglePlayPause}>{playing ? "Pause" : "Play"}</button>
      </div>
    </div>
  );
};
