import React from 'react';

export const CommonButton = ({
  label,
  onClick,
  className = "",
  type = "button",
  icon = null,
  iconPosition = "left", // NEW PROP
  wrapperClassName = "",
}) => {
  return (
    <div className={wrapperClassName}>
      <button
        type={type}
        onClick={onClick}
        className={`bg-[#F1D954] ${className}`}
      >
        {iconPosition === "left" && icon && (
          <span className="icon mr-1">{icon}</span>
        )}
        {label}
        {iconPosition === "right" && icon && (
          <span className="icon ml-1">{icon}</span>
        )}
      </button>
    </div>
  );
};
