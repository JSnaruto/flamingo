import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import UiText from '../UiText';

import { ICONS, ICON_SIZES } from '../../constants';

const Select = ({
  className,
  disabled: isDisabled,
  id,
  onChange,
  options,
  ...props
}) => {
  const classes = {
    'is-disabled': isDisabled,
  };

  return (
    <div className={cx('FormEl-wrapper Select-wrapper', { ...classes })}>
      <UiText
        as='select'
        type={UiText.TYPES.content}
        className={cx('FormEl', 'FormEl--withIcon', 'Select', className, {
          ...classes,
        })}
        disabled={isDisabled}
        id={id}
        name={id}
        onChange={onChange}
        {...props}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </UiText>

      <Icon
        icon={ICONS.IconChevronDown}
        className='FormEl-icon'
        size={ICON_SIZES.L}
      />
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ),
};

Select.defaultProps = {
  className: undefined,
  disabled: false,
  options: [],
};

export default Select;
