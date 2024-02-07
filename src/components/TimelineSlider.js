export const TimelineSlider = ({
    handleChange,
    value,
    min = 0,
    max = 1000,
    step = 1
  }) => {
    return (
      <input
        style={{ width: "100%" }}
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={handleChange}
      />
    );
  };
  