import PropTypes from "prop-types";

import { wrapper, toggleSwitch, on, toggleText } from "./ToggleSwitch.module.css";

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div className={wrapper}>
      <div
        className={`${toggleSwitch} ${isOn ? on : ""}`}
        onClick={handleToggle}
      >
        <div />
      </div>
      <p className={toggleText}>Photos grayscale {isOn ? "on" : "off"}</p>
    </div>
  );
};

ToggleSwitch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default ToggleSwitch;
