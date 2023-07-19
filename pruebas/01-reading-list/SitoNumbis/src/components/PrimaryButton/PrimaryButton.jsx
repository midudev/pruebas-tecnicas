import { memo } from "react";
import PropTypes from "prop-types";

// styles
import styles from "./styles.module.css";

function PrimaryButton({
  name,
  onClick,
  tabIndex,
  ariaLabel,
  className,
  children,
}) {
  return (
    <button
      name={name}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      className={`${styles.main} ${className}`}
    >
      {children}
    </button>
  );
}

PrimaryButton.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

const PrimaryButtonMemo = memo(
  (props) => <PrimaryButton {...props} />,
  arePropsEqual
);

PrimaryButtonMemo.displayName = "PrimaryButton";

function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.name === newProps.name &&
    oldProps.onClick === newProps.onClick &&
    oldProps.tabIndex === newProps.tabIndex &&
    oldProps.ariaLabel === newProps.ariaLabel &&
    oldProps.className === newProps.className &&
    oldProps.children === newProps.children
  );
}

export default PrimaryButtonMemo;
