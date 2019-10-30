import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Helper from '../Helper';

import { safeInvoke } from '../../utils';

const Toggle = React.forwardRef(
  ({ children, checked, disabled, helper, onChange }, ref) => {
    const [isOn, setIsOn] = useState(checked);

    const handleToggle = () => {
      if (disabled) {
        return;
      }

      const newState = !isOn;

      setIsOn(newState);
      safeInvoke(onChange, newState);
    };

    const labelProps = {
      onClick: handleToggle,
      role: 'button',
      tabIndex: 0,
      onKeyPress: ({ which }) => (which === 13 ? handleToggle : undefined),
    };

    return (
      <div
        className={cx('f-FormEl-wrapper', 'f-ToggleContainer', {
          'is-on': isOn,
          'is-disabled': disabled,
        })}
        ref={ref}
      >
        <div className='f-Toggle' {...labelProps}>
          <div className='f-Toggle-bullet' />
          <span className='f-Toggle-bullet-label f-Toggle-bullet-label--on'>
            ON
          </span>
          <span className='f-Toggle-bullet-label f-Toggle-bullet-label--off'>
            OFF
          </span>
        </div>
        {(children || helper) && (
          <div className='f-Toggle-labels' {...labelProps}>
            {children}
            {helper && <Helper>{helper}</Helper>}
          </div>
        )}
      </div>
    );
  },
);

Toggle.displayName = 'Toggle';

Toggle.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  helper: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
  checked: false,
  children: null,
  disabled: false,
  helper: null,
};

export default Toggle;