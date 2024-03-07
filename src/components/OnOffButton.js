import React, { useState } from "react";

function OnOffButton({ isOnOff }) {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
    handleEvent();
  };
  const handleEvent = () => {
    isOnOff(!isOn);
  };

  return (
    <div className={`onoffswitch ${isOn ? "on" : "off"}`}>
      <input
        type="checkbox"
        name="onoffswitch"
        className="onoffswitch-checkbox"
        id="myonoffswitch"
        checked={isOn}
        onChange={toggleSwitch}
      />
      <label className="onoffswitch-label" htmlFor="myonoffswitch">
        <span className="onoffswitch-inner"></span>
        <span className="onoffswitch-switch"></span>
      </label>
    </div>
  );
}

export default OnOffButton;
