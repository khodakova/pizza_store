import React from 'react';
import classNames from "classnames";

const Button = ({outline, classNamez, children, onClick}) => {
    return (
      <button
        onClick={onClick}
        className={classNames('button', classNamez,
        {'button--outline': outline}
        )}
      >
      {children}
    </button>
    )
};
export default Button;