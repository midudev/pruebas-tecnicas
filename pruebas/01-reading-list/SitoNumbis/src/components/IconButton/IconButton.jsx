import { memo } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styles
import styles from "./styles.module.css";

function IconButton({ onClick, name, icon, className, ariaLabel }) {
  return (
    <button
      name={name}
      onClick={onClick}
      className={`${styles.main} ${className}`}
      aria-label={ariaLabel}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

IconButton.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.object,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

const IconButtonMemo = memo(
  (props) => <IconButton {...props} />,
  arePropsEqual
);

IconButtonMemo.displayName = "IconButton";

function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.name === newProps.name &&
    oldProps.onClick === newProps.onClick &&
    oldProps.icon === newProps.icon &&
    oldProps.className === newProps.className &&
    oldProps.ariaLabel === newProps.ariaLabel
  );
}

export default IconButtonMemo;
