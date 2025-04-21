import React from 'react'

export const CommonButton = ({ label, onClick, className = "", type = "button", icon = null, wrapperClassName = "",}) => {
  return (
    <div className={wrapperClassName}>
    <button type={type}  onClick={onClick} className={`bg-[#F1D954] ${className}`}>  {label}   {icon && <span className="icon">{icon}</span>} 
    </button>
  </div>
  )
}
