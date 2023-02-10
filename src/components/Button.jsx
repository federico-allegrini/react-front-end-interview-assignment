import PropTypes from "prop-types";

import { button, full } from "./Button.module.css";

const Button = ({ children, onClick, fullWidth = false }) => {
  return (
    <button className={`${button} ${fullWidth ? full : ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
};

export default Button;