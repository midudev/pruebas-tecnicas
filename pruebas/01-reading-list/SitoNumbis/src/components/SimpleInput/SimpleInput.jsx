// @ts-check

// eslint-disable-next-line no-unused-vars
import React, { memo, useState } from "react";

import PropTypes from "prop-types";

function SimpleInput({
  id,
  className,
  label,
  leftIcon,
  rightIcon,
  inputProps,
  helperText,
}) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <div className="relative w-full">
        {leftIcon ? leftIcon : null}
        {inputProps.type === "textarea" ? (
          <textarea
            id={id}
            {...inputProps}
            className={`${inputProps.className} ${
              inputProps.disabled
                ? "dark:!text-placeholder-dark !text-white-hover"
                : ""
            }`}
          />
        ) : (
          <input
            id={id}
            {...inputProps}
            className={`${inputProps.className} ${
              inputProps.disabled
                ? "dark:!text-placeholder-dark !text-white-hover"
                : ""
            }`}
          />
        )}
        {rightIcon ? rightIcon : null}
      </div>
      <span className="text-error">{helperText}</span>
    </div>
  );
}

SimpleInput.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  inputProps: PropTypes.objectOf(PropTypes.any),
  helperText: PropTypes.string,
  generation: PropTypes.string,
};

const SimpleInputMemo = memo(
  (props) => <SimpleInput {...props} />,
  arePropsEqual
);

SimpleInputMemo.displayName = "SimpleInput";

function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.id === newProps.id &&
    oldProps.className === newProps.className &&
    oldProps.label === newProps.label &&
    oldProps.leftIcon === newProps.leftIcon &&
    oldProps.rightIcon === newProps.rightIcon &&
    oldProps.inputProps === newProps.inputProps &&
    oldProps.helperText === newProps.helperText &&
    oldProps.generation === newProps.generation
  );
}

export default SimpleInputMemo;
