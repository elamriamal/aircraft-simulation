export const AltitudeSlider = ({ handleChange, value }) => {
    return (
      <input
        style={{ height: "100%" }}
        type="range"
        min={0}
        max={420}
        value={value}
        step={10}
        orient="vertical"
        onChange={handleChange}
      />
    );
  };
  