import React from "react";

export const TimelineSlider = ({
  handleChange,
  value,
  min = 0,
  max = 1000,
  step = 1
}) => {
  const handleInput = (e) => {
    handleChange && handleChange(e.target.value);
  };

  return (
    <input
      style={{ width: "100%" }}
      type="range"
      min={min}
      max={max}
      value={value}
      step={step}
      onInput={handleInput}
    />
  );
};