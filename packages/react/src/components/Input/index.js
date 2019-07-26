import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Icon from "../Icon";
import { ICON_SIZES, INPUT_TYPES } from "../../constants";

const types = Object.values(INPUT_TYPES);

const defaultIconProps = {
  className: "FormEl-icon",
  size: ICON_SIZES.S,
};

const Input = ({
  className,
  disabled: isDisabled,
  fill: isFilled,
  id,
  invalid: isInvalid,
  onChange,
  placeholder,
  type,
  valid: isValid,
  ...props
}) => {
  const classes = {
    "is-disabled": isDisabled,
    "is-filled": isFilled,
    "is-valid": isValid,
    "is-invalid": isInvalid,
  };

  return (
    <div className={cx("FormEl-wrapper", "Input-wrapper", { ...classes })}>
      <input
        className={cx("FormEl", "Input", className, { ...classes })}
        disabled={isDisabled}
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        {...props}
      />

      {isInvalid && <Icon icon="IconClose" {...defaultIconProps} />}
      {isValid && <Icon icon="IconCheck" {...defaultIconProps} />}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fill: PropTypes.bool,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(types),
  valid: PropTypes.bool,
};

Input.defaultProps = {
  className: undefined,
  disabled: false,
  fill: false,
  invalid: false,
  placeholder: "",
  type: INPUT_TYPES.TEXT,
  valid: false,
};

export default Input;
