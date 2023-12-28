import { forwardRef } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styles
import styles from "./styles.module.css";

const IconButton = forwardRef(function IconButton(
  { onClick, name, icon, className, ariaLabel },
  ref
) {
  return (
    <button
      ref={ref}
      name={name}
      onClick={onClick}
      className={`${styles.main} ${className}`}
      aria-label={ariaLabel}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
});

IconButton.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.object,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default IconButton;
